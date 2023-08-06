import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { CreateProjectUseCase } from '@/data/usecases/project/createProject'

export class CreateProjectController implements Controller {
  constructor(private readonly createProjectUseCase: CreateProjectUseCase) {
    this.createProjectUseCase = createProjectUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const newProject = await this.createProjectUseCase.execute({
        ...req.body,
      })
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: newProject,
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
