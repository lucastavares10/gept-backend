import { FindByIdFamilyUseCase } from '@/data/usecases/family/findByIdFamily'
import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'

import { FindByIdFamilyController } from '@/presentation/controllers/family/findByIdFamily'

export const findByIdFamilyControllerFactory = (): FindByIdFamilyController => {
  const familyRepository = new FamilyRepository()

  const findByIdFamilyUseCase = new FindByIdFamilyUseCase(familyRepository)

  return new FindByIdFamilyController(findByIdFamilyUseCase)
}
