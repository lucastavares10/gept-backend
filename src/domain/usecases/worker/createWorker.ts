import { WorkerModel } from '@/domain/models'

export interface CreateWorker {
  execute(data: CreateWorker.Params): Promise<CreateWorker.Result>
}

export namespace CreateWorker {
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
  }
  export type Result = WorkerModel | null
}
