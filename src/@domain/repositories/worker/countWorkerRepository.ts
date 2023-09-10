export interface CountWorkerRepository {
  count(): Promise<CountWorkerRepository.Result>;
}

export namespace CountWorkerRepository {
  export type Result = number;
}
