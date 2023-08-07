import { PersonModel } from '@/domain/models'

export interface UpdateFamily {
  execute(data: UpdateFamily.Params): Promise<UpdateFamily.Result>
}

export namespace UpdateFamily {
  export type Params = {
    id: string
    newData: {
      street: string
      number: number
      neighborhood: string
      complement: string
      isRented: boolean
      rentPrice: number
      persons: Array<PersonModel>
      projects: Array<string>
    }
  }
  export type Result = Boolean
}
