import { WorkerModel } from '@domain/models';

export interface FindAllWorker {
  execute(params: FindAllWorker.Params): Promise<FindAllWorker.Result>;
}

export namespace FindAllWorker {
  export type Params = { page: number; perPage: number };
  export type Result = { workers: Array<WorkerModel>; total: number };
}
