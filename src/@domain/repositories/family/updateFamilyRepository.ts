import { PersonModel, ProjectModel } from '@domain/models';

export interface UpdateFamilyRepository {
  update(
    params: UpdateFamilyRepository.Params,
  ): Promise<UpdateFamilyRepository.Result>;
}

export namespace UpdateFamilyRepository {
  export type Params = {
    id: string;
    newData: {
      street: string;
      number: string;
      neighborhood: string;
      complement: string;
      isRented: boolean;
      rentPrice: number;
      projects: Array<ProjectModel>;
      persons: Array<PersonModel>;
    };
  };
  export type Result = boolean;
}
