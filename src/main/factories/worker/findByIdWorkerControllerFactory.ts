import { FindByIdWorkerUseCase } from '@/data/usecases/worker/findByIdWorker'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { FindByIdWorkerController } from '@/presentation/controllers/worker/findByIdWorker'

export const findByIdWorkerControllerFactory = (): FindByIdWorkerController => {
  const workerRepository = new WorkerRepository()

  const findByIdWorkerUseCase = new FindByIdWorkerUseCase(workerRepository)

  return new FindByIdWorkerController(findByIdWorkerUseCase)
}
