import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import pacientView from '../views/pacient.view'
import Pacient from '../models/Pacient'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default {
  async authenticate(req: Request, res: Response) {
    const {email, password} = req.body

    const authRepository = getRepository(Pacient)

    const pacient = await authRepository.findOne({where: {email}})

    if(!pacient) return res.status(401)

    const isValidPassword = await bcrypt.compare(password, pacient.password)

    if(!isValidPassword) return res.status(401)

    const token = jwt.sign({pacient : pacient.id}, `${process.env.SECRET_TOKEN}`, {expiresIn: '30d'})


    const view = pacientView.render(pacient)

    return res.json({
      view,
      token,
    })
  }
}