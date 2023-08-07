import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { UpdateFamilyUseCase } from '@/data/usecases/family/updateFamily'

export class UpdateFamilyController implements Controller {
  constructor(private readonly updateFamilyUseCase: UpdateFamilyUseCase) {
    this.updateFamilyUseCase = updateFamilyUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const updatedFamily = await this.updateFamilyUseCase.execute({
        id: req.params.id,
        newData: { ...req.body },
      })
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: updatedFamily,
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
