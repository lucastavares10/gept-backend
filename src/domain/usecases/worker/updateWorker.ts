export interface UpdateWorker {
  execute(data: UpdateWorker.Params): Promise<UpdateWorker.Result>
}

export namespace UpdateWorker {
  export type Params = {
    id: string
    newData: {
      name: string
      email: string
      password: string
      accessLevel: string
      position: string
      phone: string
      isWhatsApp: boolean
      street: string
      number: string
      birthdate: Date
      neighborhood: string
      city: string
      complement: string
      postalCode: string
      active: boolean
      projects: Array<string>
    }
  }
  export type Result = Boolean
}
