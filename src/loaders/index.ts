import './dotenv'
import AppDataSource from './postgres'
import app from './app'
import logger from './logger'
import shutdownHandlers from './shutdownHandlers'

export { app, logger, shutdownHandlers, AppDataSource }
