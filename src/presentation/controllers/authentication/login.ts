import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { ParamRequired } from '@/data/errors/paramRequired'
import { ValidatePassword } from '@/domain/usecases/security/validatePassword'
import { NotFound } from '@/data/errors/notFound'
import { FindWorkerLoginRepository } from '@/domain/repositories/authentication/findWorkerLoginRepository'
import { CreateTokenUseCase } from '@/data/usecases/security/createToken'

export class LoginController implements Controller {
  constructor(
    private readonly findWorkerLoginRepository: FindWorkerLoginRepository,
    private readonly validatePassword: ValidatePassword,
    private readonly createToken: CreateTokenUseCase
  ) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { email, password } = req.body

      if (!email || !password)
        throw new ParamRequired('email e senha são obrigatórios')

      const worker = await this.findWorkerLoginRepository.findWorkerLogin(email)

      if (!worker || !worker.id) throw new NotFound('email ou senha incorretos')

      const isValidPassword = await this.validatePassword.execute({
        password: password,
        hash: worker.password,
      })

      if (!isValidPassword) throw new NotFound('email ou senha incorretos')

      const loginData = {
        id: worker.id,
        name: worker.name,
        email: worker.email,
        accessLevel: worker.accessLevel,
        position: worker.position,
      }

      const token = await this.createToken.execute(loginData)

      return res.status(201).json({
        status: ResponseStatus.OK,
        data: {
          token,
        },
      })
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: getError(error),
      })
    }
  }
}
