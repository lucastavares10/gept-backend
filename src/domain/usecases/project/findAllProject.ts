import { ProjectModel } from '@/domain/models'

export interface FindAllProject {
  execute(): Promise<Array<ProjectModel>>
}
