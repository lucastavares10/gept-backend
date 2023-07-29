import { BaseError } from '@/data/errors/baseErrors'
import { getResposeStatus, ResponseStatus } from '@/utils/service'
import { ValidationError } from 'yup'

interface ControllersExceptionHandlerResult {
  statusCode: number
  status: ResponseStatus
  message: string
}

class ControllersExceptionHandler {
  handleError(error: Error): ControllersExceptionHandlerResult {
    if (error instanceof ValidationError) {
      return {
        statusCode: 400,
        status: ResponseStatus.BAD_REQUEST,
        message: error?.errors[0],
      }
    }

    if (error instanceof BaseError) {
      const statusCode = error.getStatusCode()
      return {
        statusCode,
        status: getResposeStatus(statusCode),
        message: error?.errors[0],
      }
    }

    return {
      statusCode: 500,
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      message: error.message || 'Erro no servidor',
    }
  }
}

export default new ControllersExceptionHandler()
