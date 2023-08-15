export interface FindWorkerLoginRepository {
  findWorkerLogin(email: string): Promise<FindWorkerLoginRepository.Result>
}

export namespace FindWorkerLoginRepository {
  export type Params = string
  export type Result = {
    id: string
    name: string
    email: string
    password: string
    accessLevel: string
    position: string
    phone: string
  } | null
}
