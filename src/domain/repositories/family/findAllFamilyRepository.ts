import { FamilyModel } from '@/domain/models'

export interface FindAllFamilyRepository {
  findAll(): Promise<FindAllFamilyRepository.Result>
}

export namespace FindAllFamilyRepository {
  export type Result = Array<FamilyModel>
}
