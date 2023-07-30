import Migrations from '../infra/postgres/migrations'
import Entities from '../infra/postgres/entities'
import { DataSource } from 'typeorm'

import dbConfig from '../config/postgres'

const AppDataSource = new DataSource({
  type: 'postgres',
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  entities: [...Object.values(Entities)],
  migrations: [...Object.values(Migrations)],
  logging: true,
})

export default AppDataSource
