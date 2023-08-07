import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'

import { DeleteFamilyController } from '@/presentation/controllers/family/deleteFamily'

export const deleteFamilyControllerFactory = (): DeleteFamilyController => {
  const familyRepository = new FamilyRepository()

  return new DeleteFamilyController(familyRepository)
}
