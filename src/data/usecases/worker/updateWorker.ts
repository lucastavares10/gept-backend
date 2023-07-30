import { UpdateWorker } from '@/domain/usecases/worker/updateWorker'
import { UpdateWorkerRepository } from '@/domain/repositories/worker/updateWorkerRepository'
import { FindByIdWorkerRepository } from '@/domain/repositories/worker/findByIdWorkerRepository'
import { NotFound } from '@/data/errors/notFound'
import { workerValidationSchema } from '@/data/validations/workerSchema'
import { EncryptPassword } from '@/domain/usecases/security/encryptPassword'

export class UpdateWorkerUseCase implements UpdateWorker {
  constructor(
    private readonly updateWorkerRepository: UpdateWorkerRepository,
    private readonly findByIdWorkerRepository: FindByIdWorkerRepository,
    private readonly encryptPassword: EncryptPassword
  ) {}

  async execute(data: UpdateWorker.Params): Promise<UpdateWorker.Result> {
    await workerValidationSchema.validate(data.newData)

    const worker = await this.findByIdWorkerRepository.findById(data.id)

    if (!worker) throw new NotFound('Trabalhador não encontrado')

    const newWorker = {
      ...worker,
      ...data.newData,
    }

    return this.updateWorkerRepository.update({
      id: data.id,
      newData: {
        ...newWorker,
        password: await this.encryptPassword.execute(newWorker.password),
      },
    })
  }
}
