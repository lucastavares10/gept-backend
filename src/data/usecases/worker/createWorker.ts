import { CreateWorker } from '@/domain/usecases/worker/createWorker'
import { CreateWorkerRepository } from '@/domain/repositories/worker/createWorkerRepository'
import { FindByEmailWorkerRepository } from '@/domain/repositories/worker/findByEmailWorkerRepository'
import { AlreadyInUseError } from '@/data/errors/alreadyInUseError'
import { workerValidationSchema } from '@/data/validations/workerSchema'
import { EncryptPassword } from '@/domain/usecases/security/encryptPassword'
import { FindByIdsProjectRepository } from '@/domain/repositories/project/findByIdsProjectRepository'
import { NotFound } from '@/data/errors/notFound'

export class CreateWorkerUseCase implements CreateWorker {
  constructor(
    private readonly createWorkerRepository: CreateWorkerRepository,
    private readonly findByEmailWorkerRepository: FindByEmailWorkerRepository,
    private readonly findByIdsProject: FindByIdsProjectRepository,
    private readonly encryptPassword: EncryptPassword
  ) {}

  async execute(data: CreateWorker.Params): Promise<CreateWorker.Result> {
    await workerValidationSchema.validate(data)

    const alreadyInUse = await this.findByEmailWorkerRepository.findByEmail(
      data.email
    )

    if (alreadyInUse?.email === data.email)
      throw new AlreadyInUseError('Email já está sendo utilizado!')

    const projects = await this.findByIdsProject.findByIds(data.projects)

    data.projects.forEach((projectId) => {
      const projectFound = projects.find((project) => project.id === projectId)

      if (!projectFound)
        throw new NotFound(`Projeto com id ${projectId} não encontrado`)
    })

    return this.createWorkerRepository.create({
      ...data,
      password: await this.encryptPassword.execute(data.password),
      projects: projects,
      active: true,
    })
  }
}
