import { ProjectModel } from '@/domain/models'

export interface CreateProjectRepository {
  create(
    params: CreateProjectRepository.Params
  ): Promise<CreateProjectRepository.Result>
}

export namespace CreateProjectRepository {
  export type Params = {
    name: string
    description: string
    active: boolean
    daysOfWork: Array<string>
  }
  export type Result = ProjectModel
}
