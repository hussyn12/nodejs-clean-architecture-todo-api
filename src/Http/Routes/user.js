import express from 'express'
import UserController from '../Controller/UserController.js'
import AuthController from '../Controller/AuthController.js'

const user = express.Router()

user.get('/list', AuthController.verify, UserController.findAll)
user.post('/create', UserController.create)
user.delete('/:id', AuthController.verify, UserController.delete)
user.put('/:id', AuthController.verify, UserController.update)

export default user