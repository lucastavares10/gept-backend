import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

export enum AccessLevelTypes {
  ADMINISTRATOR = 'administrator',
  VISITOR = 'visitor',
  MAINTAINER = 'maintainer',
}

export enum PositionTypes {
  PRESIDENT = 'president',
  VICE_PRESIDENT = 'vice-president',
  SECRETARY = 'secretary',
  TREASURER = 'treasurer',
  WORKER = 'worker',
}

@Entity('worker')
export class Worker {
  constructor() {
    this.id = uuid()
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'name' })
  name!: string

  @Column({ name: 'email' })
  email!: string

  @Column({ name: 'password', select: false })
  password!: string

  @Column({ name: 'access_level' })
  accessLevel!: string

  @Column({ name: 'position' })
  position!: string

  @Column({ name: 'phone' })
  phone!: string

  @Column({ name: 'is_whatsapp' })
  isWhatsApp!: boolean

  @Column({ name: 'street' })
  street!: string

  @Column({ name: 'number' })
  number!: number

  @Column({ name: 'birthdate' })
  birthdate!: Date

  @Column({ name: 'neighborhood' })
  neighborhood!: string

  @Column({ name: 'city' })
  city!: string

  @Column({ name: 'complement' })
  complement!: string

  @Column({ name: 'postal_code' })
  postalCode!: string

  @Column({ name: 'active', default: true })
  active!: boolean
}
