import { FindByIdFamily } from '@/domain/usecases/family/findByIdFamily'
import { FindByIdFamilyRepository } from '@/domain/repositories/family/findByIdFamilyRepository'

export class FindByIdFamilyUseCase implements FindByIdFamily {
  constructor(
    private readonly findByIdFamilyRepository: FindByIdFamilyRepository
  ) {}

  async execute(
    id: FindByIdFamilyRepository.Params
  ): Promise<FindByIdFamilyRepository.Result> {
    return this.findByIdFamilyRepository.findById(id)
  }
}
