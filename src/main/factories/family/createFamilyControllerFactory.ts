import { CreateFamilyUseCase } from '@/data/usecases/family/createFamily'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'
import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'

import { CreateFamilyController } from '@/presentation/controllers/family/createFamily'

export const createFamilyControllerFactory = (): CreateFamilyController => {
  const familyRepository = new FamilyRepository()
  const projectRepository = new ProjectRepository()

  const createFamilyUseCase = new CreateFamilyUseCase(
    familyRepository,
    projectRepository
  )

  return new CreateFamilyController(createFamilyUseCase)
}
