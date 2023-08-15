import { ProjectModel } from '@/domain/models'

export interface FindByIdsProjectRepository {
  findByIds(ids: Array<string>): Promise<FindByIdsProjectRepository.Result>
}

export namespace FindByIdsProjectRepository {
  export type Params = Array<string>
  export type Result = Array<ProjectModel> | null
}
