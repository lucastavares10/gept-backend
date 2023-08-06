import { FindAllProjectUseCase } from '@/data/usecases/project/findAllProject'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'

import { FindAllProjectController } from '@/presentation/controllers/project/findAllProject'

export const findAllProjectControllerFactory = (): FindAllProjectController => {
  const projectRepository = new ProjectRepository()

  const findAllProjectUseCase = new FindAllProjectUseCase(projectRepository)

  return new FindAllProjectController(findAllProjectUseCase)
}
