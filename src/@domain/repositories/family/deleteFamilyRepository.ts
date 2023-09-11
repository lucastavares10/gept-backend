export interface DeleteFamilyRepository {
  delete(
    params: DeleteFamilyRepositoryParams,
  ): Promise<DeleteFamilyRepositoryResult>;
}

export class DeleteFamilyRepositoryParams {
  id: string;
}
export class DeleteFamilyRepositoryResult {
  deleted: boolean;
}
