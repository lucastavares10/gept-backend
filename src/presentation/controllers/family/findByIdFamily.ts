import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { FindByIdFamilyUseCase } from '@/data/usecases/family/findByIdFamily'
import { ParamRequired } from '@/data/errors/paramRequired'

export class FindByIdFamilyController implements Controller {
  constructor(private readonly findByIdFamilyUseCase: FindByIdFamilyUseCase) {
    this.findByIdFamilyUseCase = findByIdFamilyUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const id = req.params.id

      const family = await this.findByIdFamilyUseCase.execute(id)
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: family,
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
