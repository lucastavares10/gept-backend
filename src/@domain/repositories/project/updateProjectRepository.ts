export interface UpdateProjectRepository {
  update(
    params: UpdateProjectRepositoryParams,
  ): Promise<UpdateProjectRepositoryResult>;
}

export class UpdateProjectRepositoryParams {
  id: string;
  newData: {
    name: string;
    description: string;
    active: boolean;
    daysOfWork: Array<string>;
  };
}

export class UpdateProjectRepositoryResult {
  updated: boolean;
}
