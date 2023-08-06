import { EncryptPasswordUseCase } from '@/data/usecases/security/encryptPassword'
import { CreateWorkerUseCase } from '@/data/usecases/worker/createWorker'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { CreateWorkerController } from '@/presentation/controllers/worker/createWorker'

export const createWorkerControllerFactory = (): CreateWorkerController => {
  const workerRepository = new WorkerRepository()
  const projectRepository = new ProjectRepository()
  const encryptPasswordUseCase = new EncryptPasswordUseCase()

  const createWorkerUseCase = new CreateWorkerUseCase(
    workerRepository,
    workerRepository,
    projectRepository,
    encryptPasswordUseCase
  )

  return new CreateWorkerController(createWorkerUseCase)
}
