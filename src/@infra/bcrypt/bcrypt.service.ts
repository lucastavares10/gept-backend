import {
  ValidatePassword,
  ValidatePasswordParams,
  ValidatePasswordResult,
} from '@domain/usecases/security/validatePassword';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService implements ValidatePassword {
  async execute(
    params: ValidatePasswordParams,
  ): Promise<ValidatePasswordResult> {
    const isValid = await bcrypt.compare(params.password, params.hash);

    return { isValid };
  }
}
