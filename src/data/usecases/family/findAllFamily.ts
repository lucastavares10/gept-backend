import { FindAllFamily } from '@/domain/usecases/family/findAllFamily'
import { FindAllFamilyRepository } from '@/domain/repositories/family/findAllFamilyRepository'

export class FindAllFamilyUseCase implements FindAllFamily {
  constructor(
    private readonly findAllFamilyRepository: FindAllFamilyRepository
  ) {}

  async execute(params: FindAllFamily.Params): Promise<FindAllFamily.Result> {
    return this.findAllFamilyRepository.findAll(params)
  }
}
