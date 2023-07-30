import env from 'env-var'

const securityOptions = {
  JwtSecret: env.get('JWT_SECRET').default('123').asString(),
}

export default securityOptions
