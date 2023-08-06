import { FindByIdProject } from '@/domain/usecases/project/findByIdProject'
import { FindByIdProjectRepository } from '@/domain/repositories/project/findByIdProjectRepository'

export class FindByIdProjectUseCase implements FindByIdProject {
  constructor(
    private readonly findByIdProjectRepository: FindByIdProjectRepository
  ) {}

  async execute(
    id: FindByIdProjectRepository.Params
  ): Promise<FindByIdProjectRepository.Result> {
    return this.findByIdProjectRepository.findById(id)
  }
}
