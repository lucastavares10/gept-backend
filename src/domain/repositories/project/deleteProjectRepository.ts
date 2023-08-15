export interface DeleteProjectRepository {
  delete(id: string): Promise<DeleteProjectRepository.Result>
}

export namespace DeleteProjectRepository {
  export type Params = string
  export type Result = boolean | null
}
