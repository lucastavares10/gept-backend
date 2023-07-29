import { Request, Response } from 'express'

import { IResponse } from '@/utils/service'

export interface Controller {
  handle(req: Request, res: Response): Promise<Response<IResponse>>
}
