import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { FindAllProjectUseCase } from '@/data/usecases/project/findAllProject'

export class FindAllProjectController implements Controller {
  constructor(private readonly findAllProjectUseCase: FindAllProjectUseCase) {
    this.findAllProjectUseCase = findAllProjectUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { page, perpage } = req.headers

      const result = await this.findAllProjectUseCase.execute({
        page: !Number.isNaN(page) ? Number(page) : 1,
        perPage: !Number.isNaN(perpage) ? Number(perpage) : 10,
      })

      return res.status(200).json({
        status: ResponseStatus.OK,
        data: result,
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
