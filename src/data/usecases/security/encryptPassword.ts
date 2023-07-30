import bcrypt from 'bcrypt'
import { EncryptPassword } from '@/domain/usecases/security/encryptPassword'

export class EncryptPasswordUseCase implements EncryptPassword {
  private readonly saltRounds = 10

  constructor() {}

  async execute(
    password: EncryptPassword.Params
  ): Promise<EncryptPassword.Result> {
    return bcrypt.hash(password, this.saltRounds)
  }
}
