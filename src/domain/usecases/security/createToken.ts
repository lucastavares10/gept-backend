export interface CreateToken {
  execute(params: CreateToken.Params): Promise<CreateToken.Result>
}

export namespace CreateToken {
  export type Params = {
    id: string
    email: string
    name: string
    accessLevel: string
    position: string
  }
  export type Result = string
}
