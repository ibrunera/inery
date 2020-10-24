import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Recipe from "./Recipe";
import WeekDay from "./WeekDay";

@Entity('alarm')
export default class Alarm {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hour: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.alarms)
  @JoinColumn({name: 'recipe_id'})
  recipe: Recipe;

  @OneToMany(() => WeekDay, (weekday) => weekday.alarms, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name : 'alarm_id'})
  week_days: WeekDay[];
}