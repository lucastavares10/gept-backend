import { FindWorkerLoginRepository } from '@/domain/repositories/authentication/findWorkerLoginRepository'
import { CreateWorkerRepository } from '@/domain/repositories/worker/createWorkerRepository'
import { FindAllWorkerRepository } from '@/domain/repositories/worker/findAllWorkerRepository'
import { FindByEmailWorkerRepository } from '@/domain/repositories/worker/findByEmailWorkerRepository'
import { FindByIdWorkerRepository } from '@/domain/repositories/worker/findByIdWorkerRepository'
import { UpdateWorkerRepository } from '@/domain/repositories/worker/updateWorkerRepository'
import { AppDataSource } from '@/loaders'
import { Worker } from '../entities/Worker'

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

    return workerRepository.save(params)
  }

  async findWorkerLogin(
    email: FindByEmailWorkerRepository.Params
  ): Promise<FindByEmailWorkerRepository.Result> {
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

    return workerRepository.findOneBy({ email })
  }

  async findAll(): Promise<FindAllWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    return workerRepository.findBy({ active: true })
  }

  async findById(
    id: FindByIdWorkerRepository.Params
  ): Promise<FindByIdWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    return workerRepository.findOneBy({ id })
  }

  async update(
    data: UpdateWorkerRepository.Params
  ): Promise<UpdateWorkerRepository.Result> {
    const workerRepository = AppDataSource.getRepository(Worker)

    await workerRepository.update(data.id, data.newData)

    return true
  }
}
