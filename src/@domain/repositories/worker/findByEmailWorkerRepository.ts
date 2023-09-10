import { WorkerModel } from '@domain/models';

export interface FindByEmailWorkerRepository {
  findByEmail(email: string): Promise<FindByEmailWorkerRepository.Result>;
}

export namespace FindByEmailWorkerRepository {
  export type Params = string;
  export type Result = WorkerModel | null;
}
