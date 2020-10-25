import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Alarm from '../models/Alarm'
import Recipe from '../models/Recipe'
import WeekDay from '../models/WeekDay'
import convertHourToMinutes from '../utils/convertToMinute'

export default {
  async create(req: Request, res: Response) {
    const { description, medicine_id, hour } = req.body

    const pacient_id = Number(req.headers.authorization)

    const recipeRepository = getRepository(Recipe)

    const alarmRepository = getRepository(Alarm)

    const weeks = req.body as WeekDay[]

    const week_days = weeks.map((week) => {
      return { week_day: week.week_day }
    })

    const recipeData = {
      pacient_id,
      medicine_id,
      description,
    }
    const recipe = recipeRepository.create(recipeData)

    const alarms = {
      recipe_id: recipe.id,
      hour: convertHourToMinutes(hour),
      week_days
    }

    const alarm = alarmRepository.create(alarms)


    await recipeRepository.save(recipe);
    await alarmRepository.save(alarm);


    return res.status(201).json(recipe)

  },

  async index(req: Request, res: Response) {
    const recipeRepository = getRepository(Recipe)

    const recipes = await recipeRepository.find({
      relations: ['alarms']
    })

    return res.json(recipes)
  }
}