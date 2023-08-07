import { FamilyModel } from '@/domain/models'

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
  }
  export type Result = FamilyModel | null
}
