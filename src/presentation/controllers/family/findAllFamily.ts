import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { FindAllFamilyUseCase } from '@/data/usecases/family/findAllFamily'

export class FindAllFamilyController implements Controller {
  constructor(private readonly findAllFamilyUseCase: FindAllFamilyUseCase) {
    this.findAllFamilyUseCase = findAllFamilyUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const families = await this.findAllFamilyUseCase.execute()
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: families,
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
