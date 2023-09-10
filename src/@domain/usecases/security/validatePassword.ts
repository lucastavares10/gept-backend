export interface ValidatePassword {
  execute(data: ValidatePasswordParams): Promise<ValidatePasswordResult>;
}

export class ValidatePasswordParams {
  password: string;
  hash: string;
}
export class ValidatePasswordResult {
  isValid: boolean;
}
