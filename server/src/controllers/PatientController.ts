import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Patient from '../models/Patient'
import patientView from '../views/patient.view'


export default {
  async create(req : Request, res: Response) {
    const { name, email, password, cpf } = req.body

    const photo = req.file as Express.Multer.File 
  
      
    const patientRepository = getRepository(Patient)

  
    const data = {
      name, 
      email,
      password,
      cpf, 
      photo : photo.filename  
    }

    const patient = patientRepository.create(data)

    await patientRepository.save(patient)

    return res.status(201).json(patient)
  },

  async index(req: Request, res: Response){
    const patientRepository = getRepository(Patient)

    const patient = await patientRepository.find()

    return res.json(patientView.renderMany(patient))
  },
  
  async show(req: Request, res: Response){
    const id = req.params
    
    const patientRepository = getRepository(Patient)
    
    const patient = await patientRepository.findOneOrFail(id)
    
    return res.json(patientView.render(patient))
  },

  async update(req: Request, res: Response){
    const {id} = req.params

    const patientRepository = getRepository(Patient)

    const patient = await patientRepository.findOneOrFail(id)


    if(!patient) return res.status(401)

    patientRepository.merge(patient, req.body)
    const results = await patientRepository.save(patient)
    return res.json(results)
  },

  async delete(req: Request, res: Response){
    const {id} = req.params

    const patientRepository = getRepository(Patient)

    const patient = await patientRepository.findOneOrFail(id)

    if(!patient) return res.status(401)

    await patientRepository.delete(patient)

    return res.status(204).json({message: 'pacient deleted', patient})
  }
  
}