import { FindAllWorker } from '@/domain/usecases/worker/findAllWorker'
import { FindAllWorkerRepository } from '@/domain/repositories/worker/findAllWorkerRepository'

export class FindAllWorkerUseCase implements FindAllWorker {
  constructor(
    private readonly findAllWorkerRepository: FindAllWorkerRepository
  ) {}

  async execute(params: FindAllWorker.Params): Promise<FindAllWorker.Result> {
    return this.findAllWorkerRepository.findAll(params)
  }
}
