import { Router, Response, Request } from 'express'

import { authentication } from './presentation/middlewares/authentication/authMiddleware'
import applicationOptions from './config/application'

//Login
import { loginControllerFactory } from '@/main/factories/authentication/loginControllerFactory'

//Login
import { dashboardControllerFactory } from '@/main/factories/dashboard/dashboardControllerFactory'

//Workers
import { createWorkerControllerFactory } from '@/main/factories/worker/createWorkerControllerFactory'
import { findAllWorkerControllerFactory } from '@/main/factories/worker/findAllWorkerControllerFactory'
import { findByIdWorkerControllerFactory } from '@/main/factories/worker/findByIdWorkerControllerFactory'
import { updateWorkerControllerFactory } from '@/main/factories/worker/updateWorkerControllerFactory'
import { deleteWorkerControllerFactory } from '@/main/factories/worker/deleteWorkerControllerFactory'

//Projects
import { createProjectControllerFactory } from '@/main/factories/project/createProjectControllerFactory'
import { findAllProjectControllerFactory } from '@/main/factories/project/findAllProjectControllerFactory'
import { findByIdProjectControllerFactory } from '@/main/factories/project/findByIdProjectControllerFactory'
import { updateProjectControllerFactory } from '@/main/factories/project/updateProjectControllerFactory'

//Families
import { createFamilyControllerFactory } from '@/main/factories/family/createFamilyControllerFactory'
import { findAllFamilyControllerFactory } from '@/main/factories/family/findAllFamilyControllerFactory'
import { findByIdFamilyControllerFactory } from '@/main/factories/family/findByIdFamilyControllerFactory'
import { updateFamilyControllerFactory } from '@/main/factories/family/updateFamilyControllerFactory'
import { deleteFamilyControllerFactory } from '@/main/factories/family/deleteFamilyControllerFactory'

const router = Router()

router.get('/health', (_, res: Response) =>
  res.json({ status: 'Ok', version: applicationOptions.version })
)

router.post('/login', (req: Request, res: Response) => {
  loginControllerFactory().handle(req, res)
})

router.get('/dashboard', authentication, (req: Request, res: Response) => {
  dashboardControllerFactory().handle(req, res)
})

//Workers
router.post('/worker', authentication, (req: Request, res: Response) => {
  createWorkerControllerFactory().handle(req, res)
})
router.get('/worker', authentication, (req: Request, res: Response) => {
  findAllWorkerControllerFactory().handle(req, res)
})
router.get('/worker/:id', authentication, (req: Request, res: Response) => {
  findByIdWorkerControllerFactory().handle(req, res)
})
router.put('/worker/:id', authentication, (req: Request, res: Response) => {
  updateWorkerControllerFactory().handle(req, res)
})
router.delete('/worker/:id', authentication, (req: Request, res: Response) => {
  deleteWorkerControllerFactory().handle(req, res)
})

//Projects
router.post('/project', authentication, (req: Request, res: Response) => {
  createProjectControllerFactory().handle(req, res)
})
router.get('/project', authentication, (req: Request, res: Response) => {
  findAllProjectControllerFactory().handle(req, res)
})
router.get('/project/:id', authentication, (req: Request, res: Response) => {
  findByIdProjectControllerFactory().handle(req, res)
})
router.put('/project/:id', authentication, (req: Request, res: Response) => {
  updateProjectControllerFactory().handle(req, res)
})

//Families
router.post('/family', authentication, (req: Request, res: Response) => {
  createFamilyControllerFactory().handle(req, res)
})
router.get('/family', authentication, (req: Request, res: Response) => {
  findAllFamilyControllerFactory().handle(req, res)
})
router.get('/family/:id', authentication, (req: Request, res: Response) => {
  findByIdFamilyControllerFactory().handle(req, res)
})
router.put('/family/:id', authentication, (req: Request, res: Response) => {
  updateFamilyControllerFactory().handle(req, res)
})
router.delete('/family/:id', authentication, (req: Request, res: Response) => {
  deleteFamilyControllerFactory().handle(req, res)
})

export default router
