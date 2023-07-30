import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { CreateWorkerUseCase } from '@/data/usecases/worker/createWorker'

export class CreateWorkerController implements Controller {
  constructor(private readonly createWorkerUseCase: CreateWorkerUseCase) {
    this.createWorkerUseCase = createWorkerUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const newWorker = await this.createWorkerUseCase.execute({
        ...req.body,
      })
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: newWorker,
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
