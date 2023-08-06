import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('project')
export class Project {
  constructor() {
    this.id = uuid()
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'name' })
  name!: string

  @Column({ name: 'description' })
  description!: string

  @Column({ name: 'active', default: true })
  active!: boolean

  @Column({ name: 'days_of_work' })
  daysOfWork!: string
}
