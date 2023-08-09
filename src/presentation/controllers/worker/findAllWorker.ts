import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { FindAllWorkerUseCase } from '@/data/usecases/worker/findAllWorker'

export class FindAllWorkerController implements Controller {
  constructor(private readonly findAllWorkerUseCase: FindAllWorkerUseCase) {
    this.findAllWorkerUseCase = findAllWorkerUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const workers = await this.findAllWorkerUseCase.execute()
      return res.status(200).json({
        status: ResponseStatus.OK,
        data: workers,
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
