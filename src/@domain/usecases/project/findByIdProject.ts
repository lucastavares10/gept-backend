import { ProjectModel } from '@domain/models';

export interface FindByIdProject {
  execute(id: string): Promise<FindByIdProject.Result>;
}

export namespace FindByIdProject {
  export type Result = ProjectModel | null;
}
