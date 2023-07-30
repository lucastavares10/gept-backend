import { WorkerModel } from '@/domain/models'

export interface FindByIdWorker {
  execute(id: string): Promise<FindByIdWorker.Result>
}

export namespace FindByIdWorker {
  export type Result = WorkerModel | null
}
