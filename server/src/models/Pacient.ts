import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('pacient')
export default class Pacient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({length: 12})
  cpf: string;

  @Column()
  photo: string;

}