import { FindAllWorkerUseCase } from '@/data/usecases/worker/findAllWorker'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { FindAllWorkerController } from '@/presentation/controllers/worker/findAllWorker'

export const findAllWorkerControllerFactory = (): FindAllWorkerController => {
  const workerRepository = new WorkerRepository()

  const findAllWorkerUseCase = new FindAllWorkerUseCase(workerRepository)

  return new FindAllWorkerController(findAllWorkerUseCase)
}
