import { UpdateProject } from '@/domain/usecases/project/updateProject'
import { UpdateProjectRepository } from '@/domain/repositories/project/updateProjectRepository'
import { FindByIdProjectRepository } from '@/domain/repositories/project/findByIdProjectRepository'
import { NotFound } from '@/data/errors/notFound'
import { projectValidationSchema } from '@/data/validations/projectSchema'

export class UpdateProjectUseCase implements UpdateProject {
  constructor(
    private readonly updateProjectRepository: UpdateProjectRepository,
    private readonly findByIdProjectRepository: FindByIdProjectRepository
  ) {}

  async execute(data: UpdateProject.Params): Promise<UpdateProject.Result> {
    await projectValidationSchema.validate(data.newData)

    const project = await this.findByIdProjectRepository.findById(data.id)

    if (!project) throw new NotFound('Projeto não encontrado')

    const newProject = {
      ...project,
      ...data.newData,
    }

    return this.updateProjectRepository.update({
      id: data.id,
      newData: {
        ...newProject,
      },
    })
  }
}
