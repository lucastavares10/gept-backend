import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'

import { DeleteProjectController } from '@/presentation/controllers/project/deleteProject'

export const deleteProjectControllerFactory = (): DeleteProjectController => {
  const projectRepository = new ProjectRepository()

  return new DeleteProjectController(projectRepository)
}
