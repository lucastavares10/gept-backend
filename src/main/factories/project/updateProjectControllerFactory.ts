import { UpdateProjectUseCase } from '@/data/usecases/project/updateProject'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'

import { UpdateProjectController } from '@/presentation/controllers/project/updateProject'

export const updateProjectControllerFactory = (): UpdateProjectController => {
  const projectRepository = new ProjectRepository()

  const updateProjectUseCase = new UpdateProjectUseCase(
    projectRepository,
    projectRepository
  )

  return new UpdateProjectController(updateProjectUseCase)
}
