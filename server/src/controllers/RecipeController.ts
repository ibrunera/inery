import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Alarm from '../models/Alarm'
import Recipe from '../models/Recipe'
import WeekDay from '../models/WeekDay'
import convertHourToMinutes from '../utils/convertToMinute'
import parseStringAsArray from '../utils/parseStringToArray'

interface RecipeR{
  pacient_id : number;
}

export default {
  async create(req : Request, res: Response) {
    const {description, medicine_id, hour, week_day
    } = req.body

    const pacient_id = Number(req.headers.authorization)

    const recipeRepository = getRepository(Recipe)

    const alarmData = {
      hour : convertHourToMinutes(hour),
      week_days : Number(parseStringAsArray(week_day))
    }

    const recipeData = {
      pacient_id,
      medicine_id,
      description,
      alarm : alarmData
    }
    
    const recipe = recipeRepository.create(recipeData)

    await recipeRepository.save(recipe)

    return res.status(201).json(recipe)

  }

  
}