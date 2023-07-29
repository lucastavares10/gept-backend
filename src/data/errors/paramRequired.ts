import { BaseError } from './baseErrors'

export class ParamRequired extends BaseError {
  constructor(message: string) {
    super(message, 400)
    this.name = 'ParamRequired'
  }
}
