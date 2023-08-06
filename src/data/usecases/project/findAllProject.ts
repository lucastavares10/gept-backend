import { FindAllProject } from '@/domain/usecases/project/findAllProject'
import { FindAllProjectRepository } from '@/domain/repositories/project/findAllProjectRepository'

export class FindAllProjectUseCase implements FindAllProject {
  constructor(
    private readonly findAllProjectRepository: FindAllProjectRepository
  ) {}

  async execute(): Promise<FindAllProjectRepository.Result> {
    return this.findAllProjectRepository.findAll()
  }
}
