import { UpdateWorker } from '@/domain/usecases/worker/updateWorker'
import { UpdateWorkerRepository } from '@/domain/repositories/worker/updateWorkerRepository'
import { FindByIdWorkerRepository } from '@/domain/repositories/worker/findByIdWorkerRepository'
import { NotFound } from '@/data/errors/notFound'
import { EncryptPassword } from '@/domain/usecases/security/encryptPassword'
import { FindByIdsProjectRepository } from '@/domain/repositories/project/findByIdsProjectRepository'
import { updateWorkerValidationSchema } from '@/data/validations/update/workerSchema'

export class UpdateWorkerUseCase implements UpdateWorker {
  constructor(
    private readonly updateWorkerRepository: UpdateWorkerRepository,
    private readonly findByIdWorkerRepository: FindByIdWorkerRepository,
    private readonly findByIdsProject: FindByIdsProjectRepository,
    private readonly encryptPassword: EncryptPassword
  ) {}

  async execute(data: UpdateWorker.Params): Promise<UpdateWorker.Result> {
    await updateWorkerValidationSchema.validate(data.newData)

    const worker = await this.findByIdWorkerRepository.findById(data.id)

    if (!worker) throw new NotFound('Trabalhador não encontrado.')

    const projects = await this.findByIdsProject.findByIds(
      data.newData.projects
    )

    if (projects) {
      data.newData.projects.forEach((projectId) => {
        const projectFound = projects.find(
          (project) => project.id === projectId
        )

        if (!projectFound)
          throw new NotFound(`Projeto com id ${projectId} não encontrado.`)
      })
    }

    const newWorker = {
      ...worker,
      ...data.newData,
    }

    if (data.newData.password) {
      newWorker.password = await this.encryptPassword.execute(
        newWorker.password
      )
    }

    return this.updateWorkerRepository.update({
      id: data.id,
      newData: {
        ...newWorker,
        projects: projects || [],
      },
    })
  }
}
