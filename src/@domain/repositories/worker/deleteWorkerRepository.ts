export interface DeleteWorkerRepository {
  delete(
    params: DeleteWorkerRepositoryParams,
  ): Promise<DeleteWorkerRepositoryResult>;
}

export class DeleteWorkerRepositoryParams {
  id: string;
}
export class DeleteWorkerRepositoryResult {
  deleted?: boolean;
}
