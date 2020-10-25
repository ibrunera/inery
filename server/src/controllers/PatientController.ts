import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Pacient from '../models/Pacient'


export default {
  async create(req : Request, res: Response) {
    const { name, email, password, cpf } = req.body
    
    const pacientRepository = getRepository(Pacient)

    const data = {
      name, 
      email,
      password,
      cpf, 
      photo : 'Tem uma foto aq'
    }

    const pacient = pacientRepository.create(data)

    await pacientRepository.save(pacient)

    return res.status(201).json(pacient)
  },

  async index(req: Request, res: Response){
    const pacientRepository = getRepository(Pacient)

    const pacinet = await pacientRepository.find()

    return res.json(pacinet)
  },

  async show(req: Request, res: Response){
    const id = req.params

    const pacientRepository = getRepository(Pacient)

    const pacient = await pacientRepository.findOneOrFail(id)

    return res.json(pacient)
  }
  
}