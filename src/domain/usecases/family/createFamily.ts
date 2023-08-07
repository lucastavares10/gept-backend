import { FamilyModel, PersonModel } from '@/domain/models'
export interface CreateFamily {
  execute(data: CreateFamily.Params): Promise<CreateFamily.Result>
}

export namespace CreateFamily {
  export type Params = {
    street: string
    number: number
    neighborhood: string
    complement: string
    isRented: boolean
    rentPrice: number
    projects: Array<string>
    persons: Array<PersonModel>
  }
  export type Result = FamilyModel | null
}
