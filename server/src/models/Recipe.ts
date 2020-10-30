import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from 'typeorm'
import Alarm from './Alarm';
import Medicine from './Medicine';
import Patient from './Patient';

@Entity('recipe')
export default class Recipe {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string

  @ManyToOne(() => Patient, (patient) => patient.recipes)
  @JoinColumn({name : 'patient_id'})
  patient_id: number;
  
  @ManyToOne(() => Medicine, (medicine) => medicine.recipes)
  @JoinColumn({name : 'medicine_id'})
  medicine_id: number;

  @OneToMany(() => Alarm, (alarm) => alarm.recipe_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'recipe_id'})
  alarms : Alarm[];
}