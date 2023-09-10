export interface DeleteFamilyRepository {
  delete(id: string): Promise<DeleteFamilyRepository.Result>;
}

export namespace DeleteFamilyRepository {
  export type Params = string;
  export type Result = boolean | null;
}
