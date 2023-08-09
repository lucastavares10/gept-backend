import { ValidationError } from 'yup'
import { Request, Response } from 'express'

import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { UpdateProjectUseCase } from '@/data/usecases/project/updateProject'

export class UpdateProjectController implements Controller {
  constructor(private readonly updateProjectUseCase: UpdateProjectUseCase) {
    this.updateProjectUseCase = updateProjectUseCase
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const updatedProject = await this.updateProjectUseCase.execute({
        id: req.params.id,
        newData: { ...req.body },
      })
      return res.status(200).json({
        status: ResponseStatus.OK,
        data: updatedProject,
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
