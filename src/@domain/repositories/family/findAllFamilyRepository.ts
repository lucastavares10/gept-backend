import { FamilyModel } from '@domain/models';

export interface FindAllFamilyRepository {
  findAll(
    params: FindAllFamilyRepository.Params,
  ): Promise<FindAllFamilyRepository.Result>;
}

export namespace FindAllFamilyRepository {
  export type Params = { page: number; perPage: number };
  export type Result = { families: Array<FamilyModel>; total: number };
}
