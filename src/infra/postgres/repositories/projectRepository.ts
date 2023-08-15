import { CountProjectRepository } from '@/domain/repositories/project/countProjectRepository'
import { CreateProjectRepository } from '@/domain/repositories/project/createProjectRepository'
import { FindAllProjectRepository } from '@/domain/repositories/project/findAllProjectRepository'
import { FindByIdProjectRepository } from '@/domain/repositories/project/findByIdProjectRepository'
import { FindByIdsProjectRepository } from '@/domain/repositories/project/findByIdsProjectRepository'
import { UpdateProjectRepository } from '@/domain/repositories/project/updateProjectRepository'
import { AppDataSource } from '@/loaders'
import { In } from 'typeorm'
import { Project } from '../entities/Project'

export class ProjectRepository
  implements
    CreateProjectRepository,
    FindAllProjectRepository,
    FindByIdProjectRepository,
    FindByIdsProjectRepository,
    UpdateProjectRepository,
    CountProjectRepository
{
  async create(
    params: CreateProjectRepository.Params
  ): Promise<CreateProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)

    const project = await projectRepository.save({
      ...params,
      daysOfWork: JSON.stringify(params.daysOfWork),
    })

    return {
      ...project,
      daysOfWork: JSON.parse(project.daysOfWork) as Array<string>,
    }
  }

  async findAll(
    params: FindAllProjectRepository.Params
  ): Promise<FindAllProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)

    const { page = 1, perPage = 10 } = params

    const [data, total] = await projectRepository.findAndCount({
      where: {
        active: true,
      },
      take: perPage,
      skip: perPage * page - perPage,
    })

    const projects = data.map((project) => {
      return {
        ...project,
        daysOfWork: JSON.parse(project.daysOfWork) as Array<string>,
      }
    })

    return { projects, total }
  }

  async findById(
    id: FindByIdProjectRepository.Params
  ): Promise<FindByIdProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)

    const project = await projectRepository.findOneBy({ id })

    if (project) {
      return {
        ...project,
        daysOfWork: JSON.parse(project.daysOfWork) as Array<string>,
      }
    } else {
      return null
    }
  }

  async findByIds(
    ids: FindByIdsProjectRepository.Params
  ): Promise<FindByIdsProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)

    const projects = await projectRepository.findBy({ id: In(ids) })

    return projects.map((project) => {
      return {
        ...project,
        daysOfWork: JSON.parse(project.daysOfWork) as Array<string>,
      }
    })
  }

  async update(
    data: UpdateProjectRepository.Params
  ): Promise<UpdateProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)
    await projectRepository.update(data.id, {
      ...data.newData,
      daysOfWork: JSON.stringify(data.newData.daysOfWork),
    })
    return true
  }

  async count(): Promise<CountProjectRepository.Result> {
    const projectRepository = AppDataSource.getRepository(Project)

    return projectRepository.count()
  }
}
