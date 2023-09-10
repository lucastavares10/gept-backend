import { ProjectModel } from '@domain/models';

export interface FindByIdProjectRepository {
  findById(id: string): Promise<FindByIdProjectRepository.Result>;
}

export namespace FindByIdProjectRepository {
  export type Params = string;
  export type Result = ProjectModel | null;
}
