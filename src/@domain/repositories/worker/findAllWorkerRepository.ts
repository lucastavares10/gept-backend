import { WorkerModel } from '@domain/models';

export interface FindAllWorkerRepository {
  findAll(
    params: FindAllWorkerRepository.Params,
  ): Promise<FindAllWorkerRepository.Result>;
}

export namespace FindAllWorkerRepository {
  export type Params = { page: number; perPage: number };
  export type Result = { workers: Array<WorkerModel>; total: number };
}
