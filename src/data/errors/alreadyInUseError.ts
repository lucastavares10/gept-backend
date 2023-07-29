import { BaseError } from './baseErrors'

export class AlreadyInUseError extends BaseError {
  constructor(message: string) {
    super(message, 400)
    this.name = 'AlreadyInUse'
  }
}
