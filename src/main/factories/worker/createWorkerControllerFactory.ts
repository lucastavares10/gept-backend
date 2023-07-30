import { EncryptPasswordUseCase } from '@/data/usecases/security/encryptPassword'
import { CreateWorkerUseCase } from '@/data/usecases/worker/createWorker'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { CreateWorkerController } from '@/presentation/controllers/worker/createWorker'

export const createWorkerControllerFactory = (): CreateWorkerController => {
  const workerRepository = new WorkerRepository()
  const encryptPasswordUseCase = new EncryptPasswordUseCase()

  const createWorkerUseCase = new CreateWorkerUseCase(
    workerRepository,
    workerRepository,
    encryptPasswordUseCase
  )

  return new CreateWorkerController(createWorkerUseCase)
}
