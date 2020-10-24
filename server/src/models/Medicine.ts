import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('medicine')
export default class Medicine {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  compound: string;

  @Column()
  description: string;

  @Column()
  photo: string;
}