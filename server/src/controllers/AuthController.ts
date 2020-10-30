import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import patientView from '../views/patient.view'
import Patient from '../models/Patient'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
  async authenticate(req: Request, res: Response) {
    const {email, password} = req.body

    const authRepository = getRepository(Patient)

    const patient = await authRepository.findOne({where: {email}})

    if(!patient) return res.status(401)

    const isValidPassword = await bcrypt.compare(password, patient.password)

    if(!isValidPassword) return res.status(401)

    const token = jwt.sign({pacient : patient.id}, `${process.env.SECRET_TOKEN}`, {expiresIn: '30d'})


    const view = patientView.render(patient)

    return res.json({
      view,
      token,
    })
  }
}