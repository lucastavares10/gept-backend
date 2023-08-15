import { FamilyRepository } from '@/infra/postgres/repositories/familyRepository'
import { ProjectRepository } from '@/infra/postgres/repositories/projectRepository'
import { WorkerRepository } from '@/infra/postgres/repositories/workerRepository'

import { DashboardInfoController } from '@/presentation/controllers/dashboard/dashboardInfo'

export const dashboardControllerFactory = (): DashboardInfoController => {
  const workerRepository = new WorkerRepository()
  const familyRepository = new FamilyRepository()
  const projectRepository = new ProjectRepository()

  return new DashboardInfoController(
    familyRepository,
    workerRepository,
    projectRepository
  )
}
