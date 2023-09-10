export interface EncryptPassword {
  execute(password: string): Promise<EncryptPassword.Result>;
}

export namespace EncryptPassword {
  export type Params = string;
  export type Result = string;
}
