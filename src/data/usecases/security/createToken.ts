import jwt from 'jsonwebtoken'
import { CreateToken } from '@/domain/usecases/security/createToken'
import securityOptions from '@/config/security'

export class CreateTokenUseCase implements CreateToken {
  constructor() {}

  async execute(params: CreateToken.Params): Promise<CreateToken.Result> {
    const JWT_SECRET = securityOptions.JwtSecret

    const token = jwt.sign(params, JWT_SECRET, {
      expiresIn: 84600,
    })

    return token
  }
}
