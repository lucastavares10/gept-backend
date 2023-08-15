import { FamilyModel } from '@/domain/models'
import { CountFamilyRepository } from '@/domain/repositories/family/countFamilyRepository'
import { CreateFamilyRepository } from '@/domain/repositories/family/createFamilyRepository'
import { DeleteFamilyRepository } from '@/domain/repositories/family/deleteFamilyRepository'
import { FindAllFamilyRepository } from '@/domain/repositories/family/findAllFamilyRepository'
import { FindByIdFamilyRepository } from '@/domain/repositories/family/findByIdFamilyRepository'
import { UpdateFamilyRepository } from '@/domain/repositories/family/updateFamilyRepository'
import { AppDataSource } from '@/loaders'
import { Family } from '../entities/Family'
import { personEntityToModel, personModelToEntity } from './converters/person'
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
    DeleteFamilyRepository,
    CountFamilyRepository
{
  async create(
    params: CreateFamilyRepository.Params
  ): Promise<CreateFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const projects = params.projects.map((project) => {
      return projectModelToEntity(project)
    })

    const persons = params.persons.map((project) => {
      return personModelToEntity(project)
    })

    const family = await familyRepository.save({
      ...params,
      projects,
      persons,
    })

    return {
      ...family,
      projects: family.projects.map((project) => {
        return projectEntityToModel(project)
      }),
      persons: family.persons.map((person) => {
        return personEntityToModel(person)
      }),
    }
  }

  async findAll(
    params: FindAllFamilyRepository.Params
  ): Promise<FindAllFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    const { page = 1, perPage = 10 } = params

    const [data, total] = await familyRepository.findAndCount({
      relations: {
        projects: true,
        persons: true,
      },
      take: perPage,
      skip: perPage * page - perPage,
    })

    const families = data.map((family) => {
      return {
        ...family,
        projects: family.projects.map((project) => {
          return projectEntityToModel(project)
        }),
        persons: family.persons.map((person) => {
          return personEntityToModel(person)
        }),
      }
    })

    return { families, total }
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
        persons: true,
      },
    })

    if (family) {
      return {
        ...family,
        projects: family.projects.map((project) => {
          return projectEntityToModel(project)
        }),
        persons: family.persons.map((person) => {
          return personEntityToModel(person)
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
      relations: { projects: true, persons: true },
    })

    const familyUpdated = {
      ...family,
      ...data.newData,
      projects: data.newData.projects.map((project) => {
        return projectModelToEntity(project)
      }),
      persons: data.newData.persons.map((project) => {
        return personModelToEntity(project)
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

  async count(): Promise<CountFamilyRepository.Result> {
    const familyRepository = AppDataSource.getRepository(Family)

    return familyRepository.count()
  }
}
