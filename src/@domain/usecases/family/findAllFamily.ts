import { FamilyModel } from '@domain/models';

export interface FindAllFamily {
  execute(params: FindAllFamily.Params): Promise<FindAllFamily.Result>;
}

export namespace FindAllFamily {
  export type Params = { page: number; perPage: number };
  export type Result = { families: Array<FamilyModel>; total: number };
}
