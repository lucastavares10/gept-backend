import { ProjectModel } from '@domain/models';

export interface CreateProject {
  execute(data: CreateProject.Params): Promise<CreateProject.Result>;
}

export namespace CreateProject {
  export type Params = {
    name: string;
    description: string;
    daysOfWork: Array<string>;
    active: boolean;
  };
  export type Result = ProjectModel | null;
}
