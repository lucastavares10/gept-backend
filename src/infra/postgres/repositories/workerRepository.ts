import { WorkerModel } from '@/domain/models'
import { FindWorkerLoginRepository } from '@/domain/repositories/authentication/findWorkerLoginRepository'
import { CountWorkerRepository } from '@/domain/repositories/worker/countWorkerRepository'
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
    FindWorkerLoginRepository,
    DeleteWorkerRepository,
    CountWorkerRepository
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
      select: [
        'id',
        'name',
        'email',
        'password',
        'accessLevel',
        'position',
        'phone',
      ],
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
      const projects = worker.projects?.map((project) => {
        return projectEntityToModel(project)
      })

      return {
        ...worker,
        projects: projects || [],
      }
    }

    return null
  }

  async findAll(
    params: FindAllWorkerRepository.Params
  ): Promise<FindAllWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    const { page = 1, perPage = 10 } = params

    const [data, total] = await workerRepository.findAndCount({
      relations: {
        projects: true,
      },
      take: perPage,
      skip: perPage * page - perPage,
    })

    const workers: Array<WorkerModel> = data.map((worker) => {
      return {
        ...worker,
        projects: worker.projects.map((project) => {
          return projectEntityToModel(project)
        }),
      }
    })

    return { workers, total }
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
      const projects = worker.projects?.map((project) => {
        return projectEntityToModel(project)
      })

      return {
        ...worker,
        projects: projects || [],
      }
    }

    return null
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

  async count(): Promise<CountWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    return workerRepository.count()
  }
}
