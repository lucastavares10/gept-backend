import { CreateFamily } from '@/domain/usecases/family/createFamily'
import { CreateFamilyRepository } from '@/domain/repositories/family/createFamilyRepository'
import { familyValidationSchema } from '@/data/validations/familySchema'
import { FindByIdsProjectRepository } from '@/domain/repositories/project/findByIdsProjectRepository'
import { NotFound } from '@/data/errors/notFound'
import { personValidationSchema } from '@/data/validations/personSchema'

export class CreateFamilyUseCase implements CreateFamily {
  constructor(
    private readonly createFamilyRepository: CreateFamilyRepository,
    private readonly findByIdsProject: FindByIdsProjectRepository
  ) {}

  async execute(data: CreateFamily.Params): Promise<CreateFamily.Result> {
    await familyValidationSchema.validate(data)

    const projects = await this.findByIdsProject.findByIds(data.projects)

    data.projects.forEach((projectId) => {
      const projectFound = projects.find((project) => project.id === projectId)

      if (!projectFound)
        throw new NotFound(`Projeto com id ${projectId} não encontrado.`)
    })

    data.persons.forEach(async (person) => {
      await personValidationSchema.validate(person)
    })

    return this.createFamilyRepository.create({
      ...data,
      projects: projects,
    })
  }
}
