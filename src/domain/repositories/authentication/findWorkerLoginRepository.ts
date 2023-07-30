import { WorkerModel } from '@/domain/models'

export interface FindWorkerLoginRepository {
  findWorkerLogin(email: string): Promise<FindWorkerLoginRepository.Result>
}

export namespace FindWorkerLoginRepository {
  export type Params = string
  export type Result = WorkerModel | null
}
