import env from 'env-var'

const dbOptions = {
    type: 'postgres',
    database: env.get('DB_NAME').default('gept_db').asString(),
    username: env.get('DB_USER').default('postgres').asString(),
    password: env.get('DB_PASSWORD').default('postgres').asString(),
    host: env.get('DB_HOST').default('localhost').asString(),
    port: env.get('DB_PORT').default(5432).asPortNumber(),
}

export default dbOptions