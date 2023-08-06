import { Router, Response, Request, NextFunction } from 'express'

import { authentication } from './presentation/middlewares/authentication/authMiddleware'
import applicationOptions from './config/application'

//Login
import { loginControllerFactory } from '@/main/factories/authentication/loginControllerFactory'

//Workers
import { createWorkerControllerFactory } from '@/main/factories/worker/createWorkerControllerFactory'
import { findAllWorkerControllerFactory } from '@/main/factories/worker/findAllWorkerControllerFactory'
import { findByIdWorkerControllerFactory } from '@/main/factories/worker/findByIdWorkerControllerFactory'
import { updateWorkerControllerFactory } from '@/main/factories/worker/updateWorkerControllerFactory'

//Projects
import { createProjectControllerFactory } from '@/main/factories/project/createProjectControllerFactory'
import { findAllProjectControllerFactory } from '@/main/factories/project/findAllProjectControllerFactory'
import { findByIdProjectControllerFactory } from '@/main/factories/project/findByIdProjectControllerFactory'
import { updateProjectControllerFactory } from '@/main/factories/project/updateProjectControllerFactory'

const router = Router()

router.get('/health', (_, res: Response) =>
  res.json({ status: 'Ok', version: applicationOptions.version })
)

router.post('/login', (req: Request, res: Response) => {
  loginControllerFactory().handle(req, res)
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

export default router
