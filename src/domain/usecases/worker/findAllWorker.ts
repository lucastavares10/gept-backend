import { WorkerModel } from '@/domain/models'

export interface FindAllWorker {
  execute(): Promise<Array<WorkerModel>>
}
