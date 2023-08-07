import { ProjectModel, WorkerModel } from '@/domain/models'

export interface CreateWorkerRepository {
  create(
    params: CreateWorkerRepository.Params
  ): Promise<CreateWorkerRepository.Result>
}

export namespace CreateWorkerRepository {
  export type Params = {
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
  export type Result = WorkerModel
}
