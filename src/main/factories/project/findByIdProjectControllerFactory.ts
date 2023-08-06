import { FindByIdProjectUseCase } from '@/data/usecases/project/findByIdProject'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'

import { FindByIdProjectController } from '@/presentation/controllers/project/findByIdProject'

export const findByIdProjectControllerFactory =
  (): FindByIdProjectController => {
    const projectRepository = new ProjectRepository()

    const findByIdProjectUseCase = new FindByIdProjectUseCase(projectRepository)

    return new FindByIdProjectController(findByIdProjectUseCase)
  }
