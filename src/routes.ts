import { Router, Response, Request, NextFunction } from 'express'

//Login
import { loginControllerFactory } from '@/main/factories/authentication/loginControllerFactory'

//Workers
import { createWorkerControllerFactory } from '@/main/factories/worker/createWorkerControllerFactory'
import { findAllWorkerControllerFactory } from '@/main/factories/worker/findAllWorkerControllerFactory'
import { findByIdWorkerControllerFactory } from '@/main/factories/worker/findByIdWorkerControllerFactory'
import { updateWorkerControllerFactory } from '@/main/factories/worker/updateWorkerControllerFactory'
import { authentication } from './presentation/middlewares/authentication/authMiddleware'

const router = Router()

router.get('/health', (_, res: Response) => res.json({ status: 'Ok' }))

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

export default router
