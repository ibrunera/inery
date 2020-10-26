import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Pacient from '../models/Pacient'
import pacientView from '../views/pacient.view'


export default {
  async create(req : Request, res: Response) {
    const { name, email, password, cpf } = req.body

    const photo = req.file as Express.Multer.File

    const pacientRepository = getRepository(Pacient)

  
    const data = {
      name, 
      email,
      password,
      cpf, 
      photo : photo.filename
    }

    const pacient = pacientRepository.create(data)

    await pacientRepository.save(pacient)

    return res.status(201).json(pacient)
  },

  async index(req: Request, res: Response){
    const pacientRepository = getRepository(Pacient)

    const pacient = await pacientRepository.find()

    return res.json(pacientView.renderMany(pacient))
  },
  
  async show(req: Request, res: Response){
    const id = req.params
    
    const pacientRepository = getRepository(Pacient)
    
    const pacient = await pacientRepository.findOneOrFail(id)
    
    return res.json(pacientView.render(pacient))
  },

  async update(req: Request, res: Response){
    const {id} = req.params

    const pacientRepository = getRepository(Pacient)

    const pacient = await pacientRepository.findOneOrFail(id)


    if(!pacient) return res.status(401)

    pacientRepository.merge(pacient, req.body)
    const results = await pacientRepository.save(pacient)
    return res.json(results)
  },

  async delete(req: Request, res: Response){
    const {id} = req.params

    const pacientRepository = getRepository(Pacient)

    const pacient = await pacientRepository.findOneOrFail(id)

    if(!pacient) return res.status(401)

    await pacientRepository.delete(pacient)

    return res.status(204)
  }
  
}