export interface UpdateProjectRepository {
  update(
    params: UpdateProjectRepository.Params
  ): Promise<UpdateProjectRepository.Result>
}

export namespace UpdateProjectRepository {
  export type Params = {
    id: string
    newData: {
      name: string
      description: string
      active: boolean
      daysOfWork: Array<string>
    }
  }
  export type Result = boolean
}
