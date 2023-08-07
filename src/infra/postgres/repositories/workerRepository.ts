import { FindWorkerLoginRepository } from '@/domain/repositories/authentication/findWorkerLoginRepository'
import { CreateWorkerRepository } from '@/domain/repositories/worker/createWorkerRepository'
import { DeleteWorkerRepository } from '@/domain/repositories/worker/deleteWorkerRepository'
import { FindAllWorkerRepository } from '@/domain/repositories/worker/findAllWorkerRepository'
import { FindByEmailWorkerRepository } from '@/domain/repositories/worker/findByEmailWorkerRepository'
import { FindByIdWorkerRepository } from '@/domain/repositories/worker/findByIdWorkerRepository'
import { UpdateWorkerRepository } from '@/domain/repositories/worker/updateWorkerRepository'
import { AppDataSource } from '@/loaders'
import { Worker } from '../entities/Worker'
import {
  projectEntityToModel,
  projectModelToEntity,
} from './converters/project'

export class WorkerRepository
  implements
    CreateWorkerRepository,
    FindByEmailWorkerRepository,
    FindAllWorkerRepository,
    FindByIdWorkerRepository,
    UpdateWorkerRepository,
    FindWorkerLoginRepository
{
  async create(
    params: CreateWorkerRepository.Params
  ): Promise<CreateWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const projects = params.projects.map((project) => {
      return projectModelToEntity(project)
    })

    const worker = await workerRepository.save({
      ...params,
      projects: projects,
    })

    return {
      ...worker,
      projects: worker.projects.map((project) => {
        return projectEntityToModel(project)
      }),
    }
  }

  async findWorkerLogin(
    email: FindWorkerLoginRepository.Params
  ): Promise<FindWorkerLoginRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    return workerRepository.findOne({
      select: ['id', 'name', 'email', 'password', 'accessLevel', 'position'],
      where: {
        email,
      },
    })
  }

  async findByEmail(
    email: FindByEmailWorkerRepository.Params
  ): Promise<FindByEmailWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const worker = await workerRepository.findOneBy({ email })

    if (worker) {
      return {
        ...worker,
        projects: worker.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    } else {
      return null
    }
  }

  async findAll(): Promise<FindAllWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const workers = await workerRepository.find({
      where: {
        active: true,
      },
      relations: {
        projects: true,
      },
    })

    return workers.map((worker) => {
      return {
        ...worker,
        projects: worker.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    })
  }

  async findById(
    id: FindByIdWorkerRepository.Params
  ): Promise<FindByIdWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const worker = await workerRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        projects: true,
      },
    })

    if (worker) {
      return {
        ...worker,
        projects: worker.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    } else {
      return null
    }
  }

  async update(
    data: UpdateWorkerRepository.Params
  ): Promise<UpdateWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const worker = await workerRepository.findOne({
      where: { id: data.id },
      relations: { projects: true },
    })

    const workerUpdated = {
      ...worker,
      ...data.newData,
      projects: data.newData.projects.map((project) => {
        return projectModelToEntity(project)
      }),
    }

    await workerRepository.save(workerUpdated)

    return true
  }

  async delete(
    id: DeleteWorkerRepository.Params
  ): Promise<DeleteWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    await workerRepository.delete(id)

    return true
  }
}
