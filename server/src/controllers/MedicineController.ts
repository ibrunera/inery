import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Medicine from '../models/Medicine'


export default {
  async create(req: Request, res: Response){
    const {name, manufacturer, description, compund} = req.body

    const medicineRepository = getRepository(Medicine)

    const data = {
      name, 
      manufacturer, 
      description, 
      compund, 
      photo : 'Tem uma photo aqui'
    }

    const medicine = medicineRepository.create(data)

    await medicineRepository.save(medicine)

    return res.status(201).json(medicine)
  },

  async show(req: Request, res: Response){
    const id = req.params

    const medicineRepository = getRepository(Medicine)

    const medicine = medicineRepository.findOneOrFail(id)

    return res.json(medicine)
  },

  async index(req: Request, res: Response){
    const medicineRepository = getRepository(Medicine)

    const medicines = medicineRepository.find()

    return res.json(medicines)
  }
}