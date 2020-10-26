import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/uploads'

import authMiddleware from './middlewares/AuthMiddleware'

import AlarmController from './controllers/AlarmController'
import AuthController from './controllers/AuthController'
import MedicineController from './controllers/MedicineController'
import PacientController from './controllers/PatientController'
import RecipeController from './controllers/RecipeController'
import IoTController from './controllers/IoTController'

const routes = Router()
const uploads = multer(uploadConfig)

routes.post('/pacient', uploads.single('photo'),PacientController.create)
routes.get('/pacient', authMiddleware,PacientController.index)
routes.get('/pacient/:id', PacientController.show)
routes.put('/pacient/:id', uploads.single('photo'), PacientController.update)

routes.post('/medicine', uploads.single('photo'),MedicineController.create)
routes.get('/medicine', MedicineController.index)
routes.get('/medicine/:id', MedicineController.show)

routes.post('/recipe', RecipeController.create)
routes.get('/recipe', RecipeController.index)

routes.post('/alarm/:recipe_id', AlarmController.create)
routes.get('/alarm', AlarmController.index)

routes.post('/auth', AuthController.authenticate)

routes.post('/iot/', IoTController.alarm)

export default routes