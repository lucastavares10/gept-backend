import { UpdateFamilyUseCase } from '@/data/usecases/family/updateFamily'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'
import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'

import { UpdateFamilyController } from '@/presentation/controllers/family/updateFamily'

export const updateFamilyControllerFactory = (): UpdateFamilyController => {
  const familyRepository = new FamilyRepository()
  const projectRepository = new ProjectRepository()

  const updateFamilyUseCase = new UpdateFamilyUseCase(
    familyRepository,
    familyRepository,
    projectRepository
  )

  return new UpdateFamilyController(updateFamilyUseCase)
}
