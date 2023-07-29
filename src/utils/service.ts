export enum ResponseStatus {
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  OK = 'OK',
  CREATED = 'CREATED',
}

export interface IResponse {
  status: ResponseStatus
  data?: any[] | any
  message?: string
  errors?: string[]
  totalRegisters?: number
}

export function getError(error: any): string {
  return error instanceof Error ? error.message : String(error)
}

const responseStatusMap = new Map([
  [403, ResponseStatus.UNAUTHORIZED],
  [404, ResponseStatus.NOT_FOUND],
  [400, ResponseStatus.BAD_REQUEST],
  [500, ResponseStatus.INTERNAL_SERVER_ERROR],
])

const getResposeStatus = (statusCode: number): ResponseStatus => {
  return responseStatusMap.get(statusCode) ?? ResponseStatus.BAD_REQUEST
}

export { responseStatusMap, getResposeStatus }
