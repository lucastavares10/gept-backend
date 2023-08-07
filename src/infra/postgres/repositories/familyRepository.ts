import { CreateFamilyRepository } from '@/domain/repositories/family/createFamilyRepository'
import { DeleteFamilyRepository } from '@/domain/repositories/family/deleteFamilyRepository'
import { FindAllFamilyRepository } from '@/domain/repositories/family/findAllFamilyRepository'
import { FindByIdFamilyRepository } from '@/domain/repositories/family/findByIdFamilyRepository'
import { UpdateFamilyRepository } from '@/domain/repositories/family/updateFamilyRepository'
import { AppDataSource } from '@/loaders'
import { Family } from '../entities/Family'
import {
  projectEntityToModel,
  projectModelToEntity,
} from './converters/project'

export class FamilyRepository
  implements
    CreateFamilyRepository,
    FindAllFamilyRepository,
    FindByIdFamilyRepository,
    UpdateFamilyRepository,
    DeleteFamilyRepository
{
  async create(
    params: CreateFamilyRepository.Params
  ): Promise<CreateFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const projects = params.projects.map((project) => {
      return projectModelToEntity(project)
    })

    const family = await familyRepository.save({
      ...params,
      projects: projects,
    })

    return {
      ...family,
      projects: family.projects.map((project) => {
        return projectEntityToModel(project)
      }),
    }
  }

  async findAll(): Promise<FindAllFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const families = await familyRepository.find({
      relations: {
        projects: true,
      },
    })

    return families.map((family) => {
      return {
        ...family,
        projects: family.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    })
  }

  async findById(
    id: FindByIdFamilyRepository.Params
  ): Promise<FindByIdFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const family = await familyRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        projects: true,
      },
    })

    if (family) {
      return {
        ...family,
        projects: family.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    } else {
      return null
    }
  }

  async update(
    data: UpdateFamilyRepository.Params
  ): Promise<UpdateFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const family = await familyRepository.findOne({
      where: { id: data.id },
      relations: { projects: true },
    })

    const familyUpdated = {
      ...family,
      ...data.newData,
      projects: data.newData.projects.map((project) => {
        return projectModelToEntity(project)
      }),
    }

    await familyRepository.save(familyUpdated)

    return true
  }

  async delete(
    id: DeleteFamilyRepository.Params
  ): Promise<DeleteFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    await familyRepository.delete(id)

    return true
  }
}
