import { EncryptPasswordUseCase } from '@/data/usecases/security/encryptPassword'
import { UpdateWorkerUseCase } from '@/data/usecases/worker/updateWorker'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { UpdateWorkerController } from '@/presentation/controllers/worker/updateWorker'

export const updateWorkerControllerFactory = (): UpdateWorkerController => {
  const workerRepository = new WorkerRepository()
  const encryptPassword = new EncryptPasswordUseCase()

  const updateWorkerUseCase = new UpdateWorkerUseCase(
    workerRepository,
    workerRepository,
    encryptPassword
  )

  return new UpdateWorkerController(updateWorkerUseCase)
}
