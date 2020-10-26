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
routes.delete('/pacient/:id', PacientController.delete)

routes.post('/medicine', uploads.single('photo'),MedicineController.create)
routes.get('/medicine', MedicineController.index)
routes.get('/medicine/:id', MedicineController.show)
routes.put('/medicine/:id', uploads.single('photo'), MedicineController.update)
routes.delete('/medicine/:id', MedicineController.delete)

routes.post('/recipe', RecipeController.create)
routes.get('/recipe', RecipeController.index)
routes.get('/recipe/:id', RecipeController.show)
routes.put('/recipe/:id',  RecipeController.update)
routes.delete('/recipe/:id', RecipeController.delete)

routes.post('/alarm/:recipe_id', AlarmController.create)
routes.get('/alarm', AlarmController.index)
routes.get('/alarm/:id', AlarmController.show)
routes.put('/alarm/:id', AlarmController.update)
routes.delete('/alarm/:id', AlarmController.delete)

routes.post('/auth', AuthController.authenticate)

routes.post('/iot/', IoTController.alarm)

export default routes