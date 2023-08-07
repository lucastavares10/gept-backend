import { FamilyModel } from '@/domain/models'

export interface FindByIdFamilyRepository {
  findById(id: string): Promise<FindByIdFamilyRepository.Result>
}

export namespace FindByIdFamilyRepository {
  export type Params = string
  export type Result = FamilyModel | null
}
