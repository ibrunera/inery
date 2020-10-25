import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Alarm from '../models/Alarm'
// import convertMinutesToHours from '../utils/convertMinutesToHours'

export default {
  async index(req: Request, res: Response){
    const {recipe_id} = req.params

    const alarmRepository = getRepository(Alarm)

    const alarms = alarmRepository.find({
      where : {recipe_id : Number(recipe_id)},
      relations: ['week_days']
    })

    return res.json(alarms)
  },

  async show(req: Request, res: Response){
    const {id} = req.params

    const alarmRepository = getRepository(Alarm)

    const alarm = alarmRepository.findOneOrFail(id)

    return res.json(alarm)

  },

  //Acho q isso é no front
  // async sendIoT(req: Request, res: Response){
  //     const {week_days, hours} = req.params

  //     convertMinutesToHours(Number(hours))


  // }
}
