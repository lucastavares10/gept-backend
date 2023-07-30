import { BaseError } from './baseErrors'

export class Unauthorized extends BaseError {
  constructor(message: string) {
    super(message, 401)
    this.name = 'Unauthorized'
  }
}
