export interface CountProjectRepository {
  count(): Promise<CountProjectRepository.Result>
}

export namespace CountProjectRepository {
  export type Result = number
}
