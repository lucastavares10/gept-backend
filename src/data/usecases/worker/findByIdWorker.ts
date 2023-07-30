import { FindByIdWorker } from '@/domain/usecases/worker/findByIdWorker'
import { FindByIdWorkerRepository } from '@/domain/repositories/worker/findByIdWorkerRepository'

export class FindByIdWorkerUseCase implements FindByIdWorker {
  constructor(
    private readonly findByIdWorkerRepository: FindByIdWorkerRepository
  ) {}

  async execute(
    id: FindByIdWorkerRepository.Params
  ): Promise<FindByIdWorkerRepository.Result> {
    return this.findByIdWorkerRepository.findById(id)
  }
}
