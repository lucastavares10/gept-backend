import { BaseError } from './baseErrors'

export class NotFound extends BaseError {
  constructor(message: string) {
    super(message, 404)
    this.name = 'NotFound'
  }
}
