import { WorkerModel } from '@/domain/models'

export interface FindByIdWorkerRepository {
  findById(id: string): Promise<FindByIdWorkerRepository.Result>
}

export namespace FindByIdWorkerRepository {
  export type Params = string
  export type Result = WorkerModel | null
}
