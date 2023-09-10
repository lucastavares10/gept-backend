import { ProjectModel } from '@domain/models';

export interface FindAllProject {
  execute(params: FindAllProject.Params): Promise<FindAllProject.Result>;
}

export namespace FindAllProject {
  export type Params = { page: number; perPage: number };
  export type Result = { projects: Array<ProjectModel>; total: number };
}
