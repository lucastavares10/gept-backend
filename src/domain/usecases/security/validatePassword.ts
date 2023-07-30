export interface ValidatePassword {
  execute(data: ValidatePassword.Params): Promise<ValidatePassword.Result>
}

export namespace ValidatePassword {
  export type Params = {
    password: string
    hash: string
  }
  export type Result = boolean
}
