import { NextFunction, Request, Response } from 'express'
import { getError, ResponseStatus } from '@/utils/service'
import { promisify } from 'util'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import securityOptions from '@/config/security'

export async function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers
    let token: string | undefined
    const TOKEN_TYPE = 'Bearer'
    const JWT_SECRET = securityOptions.JwtSecret

    if (authorization) {
      const [tokenType, _token] = authorization.split(' ')
      if (tokenType !== TOKEN_TYPE) {
        return res.status(401).json({
          status: ResponseStatus.UNAUTHORIZED,
          errors: ['Token inválido'],
        })
      }

      token = _token
    }

    if (!token) {
      return res.status(401).json({
        status: ResponseStatus.UNAUTHORIZED,
        errors: ['Token inválido'],
      })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      name: string
      email: string
      accessLevel: string
      position: string
    }

    req.headers.workerId = decoded.id
    req.headers.workerName = decoded.name
    req.headers.workerEmail = decoded.email
    req.headers.workerAccessLevel = decoded.accessLevel
    req.headers.workerPosition = decoded.position

    return next()
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({
        status: ResponseStatus.UNAUTHORIZED,
        message: getError(error),
      })
    }

    return res.status(500).json({
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: getError(error),
    })
  }
}
