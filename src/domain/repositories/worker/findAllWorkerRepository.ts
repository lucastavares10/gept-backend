import { WorkerModel } from '@/domain/models'

export interface FindAllWorkerRepository {
  findAll(): Promise<FindAllWorkerRepository.Result>
}

export namespace FindAllWorkerRepository {
  export type Result = Array<WorkerModel>
}
