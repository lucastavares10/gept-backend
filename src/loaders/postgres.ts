import 'reflect-metadata'
import { DataSource } from 'typeorm'

import dbConfig from '../config/postgres'

const AppDataSource = new DataSource({
  type: 'postgres',
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  entities: ["../infra/postgres/entities/*.ts"],
  migrations: ["../infra/postgres/migrations/*.ts"],
  logging: true,
  synchronize: true,
})

export default AppDataSource
