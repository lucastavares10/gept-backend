import { ProjectModel } from '@/domain/models'

export interface UpdateWorkerRepository {
  update(
    params: UpdateWorkerRepository.Params
  ): Promise<UpdateWorkerRepository.Result>
}

export namespace UpdateWorkerRepository {
  export type Params = {
    id: string
    newData: {
      name: string
      email: string
      password: string
      accessLevel: string
      position: string
      phone: string
      isWhatsApp: boolean
      street: string
      number: number
      birthdate: Date
      neighborhood: string
      city: string
      complement: string
      postalCode: string
      active: boolean
      projects: Array<ProjectModel>
    }
  }
  export type Result = boolean
}
