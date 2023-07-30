import { CreateTokenUseCase } from '@/data/usecases/security/createToken'
import { ValidatePasswordUseCase } from '@/data/usecases/security/validatePassword'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'
import { LoginController } from '@/presentation/controllers/authentication/login'

export const loginControllerFactory = (): LoginController => {
  const workerRepository = new WorkerRepository()
  const validatePasswordUseCase = new ValidatePasswordUseCase()
  const createTokenUseCase = new CreateTokenUseCase()

  const loginController = new LoginController(
    workerRepository,
    validatePasswordUseCase,
    createTokenUseCase
  )

  return loginController
}
