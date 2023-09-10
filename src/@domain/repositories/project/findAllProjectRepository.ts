import { ProjectModel } from '@domain/models';

export interface FindAllProjectRepository {
  findAll(
    params: FindAllProjectRepository.Params,
  ): Promise<FindAllProjectRepository.Result>;
}

export namespace FindAllProjectRepository {
  export type Params = { page: number; perPage: number };
  export type Result = { projects: Array<ProjectModel>; total: number };
}
