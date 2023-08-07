import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { DeleteFamilyRepository } from '@/domain/repositories/family/deleteFamilyRepository'

export class DeleteFamilyController implements Controller {
  constructor(private readonly deleteFamilyRepository: DeleteFamilyRepository) {
    this.deleteFamilyRepository = deleteFamilyRepository
  }

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const id = req.params.id

      await this.deleteFamilyRepository.delete(id)

      return res.status(201).json({
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
