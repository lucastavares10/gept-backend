import { FindAllFamilyUseCase } from '@/data/usecases/family/findAllFamily'
import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'

import { FindAllFamilyController } from '@/presentation/controllers/family/findAllFamily'

export const findAllFamilyControllerFactory = (): FindAllFamilyController => {
  const familyRepository = new FamilyRepository()

  const findAllFamilyUseCase = new FindAllFamilyUseCase(familyRepository)

  return new FindAllFamilyController(findAllFamilyUseCase)
}
