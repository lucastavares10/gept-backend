import { WorkerEntity } from '@domain/entities/worker.entity';

export interface FindByIdWorker {
  execute(id: string): Promise<FindByIdWorkerResult>;
}

export class FindByIdWorkerResult {
  worker: WorkerEntity | null;
}
