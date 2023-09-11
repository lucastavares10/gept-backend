import { PersonEntity } from '@domain/entities/person.entity';

export interface UpdateFamily {
  execute(data: UpdateFamilyParams): Promise<UpdateFamilyResult>;
}

export class UpdateFamilyParams {
  id: string;
  newData: {
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    isRented: boolean;
    rentPrice: number;
    persons: Array<PersonEntity>;
    projects: Array<string>;
  };
}
export class UpdateFamilyResult {
  updated: boolean;
}
