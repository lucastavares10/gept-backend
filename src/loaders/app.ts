import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from '../routes'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  const { offset, limit } = req.headers

  req.headers.offset = Number.isNaN(Number(offset)) ? 0 : offset
  req.headers.limit = Number.isNaN(Number(limit)) ? 100 : limit

  return next()
})

morgan.token('body', (req: express.Request) => {
  const isNotGet = req.method !== 'GET'
  if (isNotGet) {
    return JSON.stringify(req.body)
  }
  return 'body-empty'
})

app.use(morgan(':date[iso] :method :url :status :body - :total-time ms'))

app.use('/api', routes)


export default app
