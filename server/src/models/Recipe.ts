import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm'
import Alarm from './Alarm';
import Medicine from './Medicine';
import Pacient from './Pacient';

@Entity('recipe')
export default class Recipe {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string

  @ManyToOne(() => Pacient, (pacient) => pacient.recipes)
  @JoinColumn({name : 'pacient_id'})
  pacient_id: number;
  
  @ManyToOne(() => Medicine, (medicine) => medicine.recipes)
  @JoinColumn({name : 'medicine_id'})
  medicine_id: number;

  @OneToMany(() => Alarm, (alarm) => alarm.recipe, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'recipe_id'})
  alarms : Alarm[];
}