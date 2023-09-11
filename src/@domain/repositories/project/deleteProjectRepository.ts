export interface DeleteProjectRepository {
  delete(
    params: DeleteProjectRepositoryParams,
  ): Promise<DeleteProjectRepositoryResult>;
}

export class DeleteProjectRepositoryParams {
  id: string;
}

export class DeleteProjectRepositoryResult {
  deleted?: boolean;
}
