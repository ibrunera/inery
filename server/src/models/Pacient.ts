import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import Recipe from './Recipe'
import bcrypt from 'bcryptjs'

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
  photo?: string;

  @OneToMany(() => Recipe, (recipe) => recipe.pacient_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name : 'pacient_id'})
  recipes: Recipe[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 8)
  }

}