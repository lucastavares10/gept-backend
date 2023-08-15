export interface CountFamilyRepository {
  count(): Promise<CountFamilyRepository.Result>
}

export namespace CountFamilyRepository {
  export type Result = number
}
