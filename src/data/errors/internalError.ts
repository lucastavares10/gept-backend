import { BaseError } from './baseErrors'

export class InternalError extends BaseError {
  constructor(message: string) {
    super(message, 500)
    this.name = 'InternalError'
  }
}
