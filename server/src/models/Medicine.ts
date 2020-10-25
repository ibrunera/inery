import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'
import Recipe from './Recipe';

@Entity('medicine')
export default class Medicine {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  compund: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @OneToMany(() => Recipe, (recipe) => recipe.medicine_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name : 'medicine_id'})
  recipes: Recipe[];
}