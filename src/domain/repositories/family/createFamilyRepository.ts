import { ProjectModel, FamilyModel, PersonModel } from '@/domain/models'

export interface CreateFamilyRepository {
  create(
    params: CreateFamilyRepository.Params
  ): Promise<CreateFamilyRepository.Result>
}

export namespace CreateFamilyRepository {
  export type Params = {
    street: string
    number: number
    neighborhood: string
    complement: string
    isRented: boolean
    rentPrice: number
    projects: Array<ProjectModel>
    persons: Array<PersonModel>
  }
  export type Result = FamilyModel
}
