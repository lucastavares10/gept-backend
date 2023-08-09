import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { DeleteWorkerRepository } from '@/domain/repositories/worker/deleteWorkerRepository'

export class DeleteWorkerController implements Controller {
  constructor(private readonly deleteWorkerRepository: DeleteWorkerRepository) {
    this.deleteWorkerRepository = deleteWorkerRepository
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const id = req.params.id

      await this.deleteWorkerRepository.delete(id)

      return res.status(200).json({
        status: ResponseStatus.OK,
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
