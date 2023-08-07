import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { DeleteWorkerController } from '@/presentation/controllers/worker/deleteWorker'

export const deleteWorkerControllerFactory = (): DeleteWorkerController => {
  const workerRepository = new WorkerRepository()

  return new DeleteWorkerController(workerRepository)
}
