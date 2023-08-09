import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { FindByIdWorkerUseCase } from '@/data/usecases/worker/findByIdWorker'
import { ParamRequired } from '@/data/errors/paramRequired'

export class FindByIdWorkerController implements Controller {
  constructor(private readonly findByIdWorkerUseCase: FindByIdWorkerUseCase) {
    this.findByIdWorkerUseCase = findByIdWorkerUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const id = req.params.id

      const worker = await this.findByIdWorkerUseCase.execute(id)
      return res.status(200).json({
        status: ResponseStatus.OK,
        data: worker,
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
