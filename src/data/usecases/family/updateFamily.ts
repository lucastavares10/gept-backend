import { UpdateFamily } from '@/domain/usecases/family/updateFamily'
import { UpdateFamilyRepository } from '@/domain/repositories/family/updateFamilyRepository'
import { FindByIdFamilyRepository } from '@/domain/repositories/family/findByIdFamilyRepository'
import { NotFound } from '@/data/errors/notFound'
import { familyValidationSchema } from '@/data/validations/familySchema'
import { FindByIdsProjectRepository } from '@/domain/repositories/project/findByIdsProjectRepository'

export class UpdateFamilyUseCase implements UpdateFamily {
  constructor(
    private readonly updateFamilyRepository: UpdateFamilyRepository,
    private readonly findByIdFamilyRepository: FindByIdFamilyRepository,
    private readonly findByIdsProject: FindByIdsProjectRepository
  ) {}

  async execute(data: UpdateFamily.Params): Promise<UpdateFamily.Result> {
    await familyValidationSchema.validate(data.newData)

    const family = await this.findByIdFamilyRepository.findById(data.id)

    if (!family) throw new NotFound('Trabalhador não encontrado')

    const projects = await this.findByIdsProject.findByIds(
      data.newData.projects
    )

    data.newData.projects.forEach((projectId) => {
      const projectFound = projects.find((project) => project.id === projectId)

      if (!projectFound)
        throw new NotFound(`Projeto com id ${projectId} não encontrado`)
    })

    const newFamily = {
      ...family,
      ...data.newData,
    }

    return this.updateFamilyRepository.update({
      id: data.id,
      newData: {
        ...newFamily,
        projects: projects,
      },
    })
  }
}
