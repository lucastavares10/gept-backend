export interface Login {
  execute(data: LoginParams): Promise<LoginResult>;
}

export class LoginParams {
  email: string;
  password: string;
}

export class LoginResult {
  token: string;
}
