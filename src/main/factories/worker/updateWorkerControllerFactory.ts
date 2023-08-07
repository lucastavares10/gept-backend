import { EncryptPasswordUseCase } from '@/data/usecases/security/encryptPassword'
import { UpdateWorkerUseCase } from '@/data/usecases/worker/updateWorker'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { UpdateWorkerController } from '@/presentation/controllers/worker/updateWorker'

export const updateWorkerControllerFactory = (): UpdateWorkerController => {
  const workerRepository = new WorkerRepository()
  const encryptPassword = new EncryptPasswordUseCase()
  const projectRepository = new ProjectRepository()

  const updateWorkerUseCase = new UpdateWorkerUseCase(
    workerRepository,
    workerRepository,
    projectRepository,
    encryptPassword
  )

  return new UpdateWorkerController(updateWorkerUseCase)
}
