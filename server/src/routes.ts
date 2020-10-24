import {Router} from 'express'
import PacientController from './controllers/PatientController'
const routes = Router()

routes.post('/pacient', PacientController.create)
routes.get('pacient', PacientController.index)
routes.get('pacient/:id', PacientController.show)

export default routes