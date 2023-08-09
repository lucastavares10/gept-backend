import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { CreateFamilyUseCase } from '@/data/usecases/family/createFamily'

export class CreateFamilyController implements Controller {
  constructor(private readonly createFamilyUseCase: CreateFamilyUseCase) {
    this.createFamilyUseCase = createFamilyUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const newFamily = await this.createFamilyUseCase.execute({
        ...req.body,
      })
      return res.status(201).json({
        status: ResponseStatus.CREATED,
        data: newFamily,
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
