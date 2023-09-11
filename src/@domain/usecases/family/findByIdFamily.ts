import { FamilyEntity } from '@domain/entities/family.entity';

export interface FindByIdFamily {
  execute(id: string): Promise<FindByIdFamilyResult>;
}

export class FindByIdFamilyResult {
  family?: FamilyEntity;
}
