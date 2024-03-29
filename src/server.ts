import 'reflect-metadata'
import * as env from 'env-var'

import { app, logger, shutdownHandlers, AppDataSource } from './loaders'

const PORT = env.get('PORT').default('3000').asIntPositive()

const server = app.listen(PORT, () => {
  AppDataSource.initialize()
    .then(() => {
      logger.info('PostgreSQL connected')
      logger.info(`Server is running on port ${PORT}`)
    })
    .catch((error: any) => {
      logger.error(error)
      process.exit(1)
    })
})

shutdownHandlers.init(server)
