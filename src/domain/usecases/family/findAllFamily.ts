import { FamilyModel } from '@/domain/models'

export interface FindAllFamily {
  execute(): Promise<Array<FamilyModel>>
}
