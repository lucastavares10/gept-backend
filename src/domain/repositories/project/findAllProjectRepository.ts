import { ProjectModel } from '@/domain/models'

export interface FindAllProjectRepository {
  findAll(): Promise<FindAllProjectRepository.Result>
}

export namespace FindAllProjectRepository {
  export type Result = Array<ProjectModel>
}
