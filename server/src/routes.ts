import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/uploads'

import AlarmController from './controllers/AlarmController'
import MedicineController from './controllers/MedicineController'
import PacientController from './controllers/PatientController'
import RecipeController from './controllers/RecipeController'

const routes = Router()
const uploads = multer(uploadConfig)

routes.post('/pacient', uploads.single('photo'),PacientController.create)
routes.get('/pacient', PacientController.index)
routes.get('/pacient/:id', PacientController.show)

routes.post('/medicine', uploads.single('photo'),MedicineController.create)
routes.get('/medicine', MedicineController.index)
routes.get('/medicine/:id', MedicineController.show)

routes.post('/recipe', RecipeController.create)
routes.get('/recipe', RecipeController.index)

routes.post('/alarm/:recipe_id', AlarmController.create)
routes.get('/alarm', AlarmController.index)

export default routes