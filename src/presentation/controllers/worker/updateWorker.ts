import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { UpdateWorkerUseCase } from '@/data/usecases/worker/updateWorker'
import { ParamRequired } from '@/data/errors/paramRequired'

export class UpdateWorkerController implements Controller {
  constructor(private readonly updateWorkerUseCase: UpdateWorkerUseCase) {
    this.updateWorkerUseCase = updateWorkerUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const updatedWorker = await this.updateWorkerUseCase.execute({
        id: req.params.id,
        newData: { ...req.body },
      })
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: updatedWorker,
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
