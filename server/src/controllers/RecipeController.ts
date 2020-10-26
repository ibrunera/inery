import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Alarm from '../models/Alarm'
import Recipe from '../models/Recipe'
import WeekDay from '../models/WeekDay'
import convertHourToMinutes from '../utils/convertToMinute'
import parseStringAsArray from '../utils/parseStringToArray'

export default {
  async create(req: Request, res: Response) {
    const { description, medicine_id, hour } = req.body

    const pacient_id = Number(req.headers.authorization)

    const recipeRepository = getRepository(Recipe)

    const alarmRepository = getRepository(Alarm)

    const weeks = req.body.weeks as WeekDay[]
    console.log("Fora do map", weeks)
    const week_days = weeks.map((week: WeekDay) => {
      console.log("Dentro do map", week)
      return { week_day: week.week_day }
    })

    
    const recipeData = {
      pacient_id,
      medicine_id,
      description,
    }
    const recipe = recipeRepository.create(recipeData)
    await recipeRepository.save(recipe);

    const alarms = {
      recipe_id: recipe.id,
      hour: convertHourToMinutes(hour),
      week_days
    }
    

    const alarm = alarmRepository.create(alarms)


    await alarmRepository.save(alarm);


    return res.status(201).json(recipe)

  },

  async index(req: Request, res: Response) {
    const  pacient_id = req.headers.authorization
    const recipeRepository = getRepository(Recipe)

    const recipes = await recipeRepository.find({
      where: { pacient_id : Number(pacient_id)},
      relations: ['alarms']
    })

    return res.json(recipes)
  }
}