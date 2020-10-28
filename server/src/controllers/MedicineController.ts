import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Medicine from '../models/Medicine'
import medicineView from '../views/medicine.view'


export default {
  async create(req: Request, res: Response){
    const {name, manufacturer, description, compund} = req.body

    const photo = req.file as Express.Multer.File

    const medicineRepository = getRepository(Medicine)
    // console.log("Data: ", "nome", name, "Fab", manufacturer,"Desc", description, "comp", compund,"photo", photo.filename)

    const data = {
      name, 
      manufacturer, 
      description, 
      compund, 
      photo : photo.filename
    }

    const medicine = medicineRepository.create(data)

    await medicineRepository.save(medicine)

    return res.status(201).json(medicine)
  },

  async show(req: Request, res: Response){
    const id = req.params

    const medicineRepository = getRepository(Medicine)

    const medicine = await medicineRepository.findOneOrFail(id)

    return res.json(medicineView.render(medicine))

  },

  async index(req: Request, res: Response){
    const medicineRepository = getRepository(Medicine)

    const medicines = await medicineRepository.find()

    return res.json(medicineView.renderMany(medicines))
  },

  async update(req: Request, res: Response){
    const {id} = req.params
    
    const medicineRepository = getRepository(Medicine)
  
    const medicine = await medicineRepository.findOneOrFail(id)

    if(!medicine) return res.status(401)

    medicineRepository.merge(medicine, req.body)

    const results = await medicineRepository.save(medicine)

    return res.json(results)
  },

  async delete(req: Request, res: Response){
    const {id} = req.params

    const medicineRepository = getRepository(Medicine)

    const medicine = await medicineRepository.findOneOrFail(id)

    if(!medicine) return res.status(401)

    await medicineRepository.delete(medicine)

    return res.status(204).json({message : 'medicine deleted', medicine})
  }
}