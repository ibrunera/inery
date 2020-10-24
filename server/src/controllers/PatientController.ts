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
      cpf
    }

    const pacient = pacientRepository.create(data)

    await pacientRepository.save(pacient)

    res.status(201).json(pacient)
  }
}