import express from 'express'
import TodoController from '../Controller/TodoController.js'
import AuthController from '../Controller/AuthController.js'

const todo = express.Router()

todo.post('/create', AuthController.verify, TodoController.create )
todo.get('/list', AuthController.verify, TodoController.findAll )
todo.delete("/delete/:id", AuthController.verify, TodoController.delete)
todo.put('/:id', AuthController.verify, TodoController.update)

export default todo