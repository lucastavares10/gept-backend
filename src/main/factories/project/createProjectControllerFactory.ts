import { CreateProjectUseCase } from '@/data/usecases/project/createProject'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'

import { CreateProjectController } from '@/presentation/controllers/project/createProject'

export const createProjectControllerFactory = (): CreateProjectController => {
  const projectRepository = new ProjectRepository()

  const createProjectUseCase = new CreateProjectUseCase(projectRepository)

  return new CreateProjectController(createProjectUseCase)
}
