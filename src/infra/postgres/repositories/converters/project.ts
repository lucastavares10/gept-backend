import { ProjectModel } from '@/domain/models'
import { Project } from '@/infra/postgres/entities/Project'

export function projectModelToEntity(project: ProjectModel): Project {
  return new Project(
    project.id,
    project.name,
    project.description,
    project.active,
    JSON.stringify(project.daysOfWork)
  )
}

export function projectEntityToModel(project: Project): ProjectModel {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    active: project.active,
    daysOfWork: JSON.parse(project.daysOfWork),
  }
}
