import { CreateProject } from '@/domain/usecases/project/createProject'
import { CreateProjectRepository } from '@/domain/repositories/project/createProjectRepository'
import { projectValidationSchema } from '@/data/validations/projectSchema'

export class CreateProjectUseCase implements CreateProject {
  constructor(
    private readonly createProjectRepository: CreateProjectRepository
  ) {}

  async execute(data: CreateProject.Params): Promise<CreateProject.Result> {
    await projectValidationSchema.validate(data)

    return this.createProjectRepository.create({
      ...data,
      active: true,
    })
  }
}
