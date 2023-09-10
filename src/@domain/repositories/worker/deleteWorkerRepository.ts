export interface DeleteWorkerRepository {
  delete(id: string): Promise<DeleteWorkerRepository.Result>;
}

export namespace DeleteWorkerRepository {
  export type Params = string;
  export type Result = boolean | null;
}
