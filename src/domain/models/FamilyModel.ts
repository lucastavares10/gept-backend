import { PersonModel } from './PersonModel'
import { ProjectModel } from './ProjectModel'

export type FamilyModel = {
  id?: string
  street: string
  number: number
  neighborhood: string
  complement: string
  isRented: boolean
  rentPrice: number
  projects: Array<ProjectModel>
  persons: Array<PersonModel>
}
