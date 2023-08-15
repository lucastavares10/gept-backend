import { ValidationError } from 'yup'
import { Request, Response } from 'express'
import { Controller } from '@/presentation/protocols/controller'
import { IResponse, ResponseStatus, getError } from '@/utils/service'
import { CountFamilyRepository } from '@/domain/repositories/family/countFamilyRepository'
import { CountWorkerRepository } from '@/domain/repositories/worker/countWorkerRepository'
import { CountProjectRepository } from '@/domain/repositories/project/countProjectRepository'

export class DashboardInfoController implements Controller {
  constructor(
    private readonly familyRepository: CountFamilyRepository,
    private readonly workerRepository: CountWorkerRepository,
    private readonly projectRepository: CountProjectRepository
  ) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const [familiesCount, workersCount, projectsCount] = await Promise.all([
        this.familyRepository.count(),
        this.workerRepository.count(),
        this.projectRepository.count(),
      ])

      return res.status(200).json({
        status: ResponseStatus.OK,
        data: {
          families: familiesCount,
          workers: workersCount,
          projects: projectsCount,
        },
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
