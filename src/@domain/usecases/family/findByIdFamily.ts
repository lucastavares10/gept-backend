import { FamilyModel } from '@domain/models';

export interface FindByIdFamily {
  execute(id: string): Promise<FindByIdFamily.Result>;
}

export namespace FindByIdFamily {
  export type Result = FamilyModel | null;
}
