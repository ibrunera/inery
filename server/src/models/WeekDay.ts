import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Alarm from './Alarm';

@Entity('week_day')
export default class WeekDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  week_day: number;

  @ManyToOne(() => Alarm, (alarm) => alarm.week_days)
  @JoinColumn({name : 'alarm_id'})
  alarm: Alarm;
}