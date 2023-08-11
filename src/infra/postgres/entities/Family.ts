import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Person } from './Person'
import { Project } from './Project'

@Entity('family')
export class Family {
  constructor() {
    this.id = uuid()
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'street' })
  street!: string

  @Column({ name: 'number' })
  number!: string

  @Column({ name: 'neighborhood' })
  neighborhood!: string

  @Column({ name: 'complement' })
  complement!: string

  @Column({ name: 'is_rented' })
  isRented!: boolean

  @Column({
    name: 'rent_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
  })
  rentPrice!: number

  @ManyToMany(() => Project)
  @JoinTable({
    name: 'project_family',
    joinColumn: {
      name: 'family_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
  })
  projects!: Project[]

  @OneToMany(() => Person, (person) => person.family, {
    cascade: ['insert', 'update'],
  })
  persons!: Person[]
}
