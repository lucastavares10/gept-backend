import { ValidatePassword } from '@/domain/usecases/security/validatePassword'
import bcrypt from 'bcrypt'

export class ValidatePasswordUseCase implements ValidatePassword {
  constructor() {}

  async execute(
    params: ValidatePassword.Params
  ): Promise<ValidatePassword.Result> {
    return bcrypt.compare(params.password, params.hash)
  }
}
