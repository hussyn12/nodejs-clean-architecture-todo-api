import {serviceLocator} from '../../Infrastructure/Config/serviceLocatorTodo.js'
import {ListTodo} from '../../Application/use_cases/Todo/ListTodo.js'
import {CreateTodo} from '../../Application/use_cases/Todo/CreateTodo.js'
import {DeleteTodo} from '../../Application/use_cases/Todo/DeleteTodo.js'
import {UpdateTodo} from '../../Application/use_cases/Todo/UpdateTodo.js'

class TodoController {
    static async create (req, res) {
        const {title, desc, author, status} = req.body
        try {
            const service = serviceLocator()
            const todo = await CreateTodo(title, desc, author, status, service)
            let todoCreate = service.todoSerialize.serialize(todo)
            res.json({message: "Task Has been Created", todoCreate})
        }
        catch (err) {
            res.json({message: "There's Something Worng Creating Task"})
        }
    }

    static async findAll (req, res) {
        try {
            const service = serviceLocator()
            const todos = await ListTodo(service)
            res.json(todos.map(service.todoSerialize.serialize))
        }
        catch (err) {
            res.json({message: "There's Something Worng Finding All Task"})
        } 
    }

    static async delete (req, res) {
        const todoId = req.params.id
        try {
            const service = serviceLocator()
            const deleteTodo = await DeleteTodo(todoId, service)
            res.json({message: "Task has been deleted", deleteTodo})
        }
         catch (err) {
            res.json({message: "There's Something Worng Deleting Task"})
        }
    }

    static async update (req, res) {
        const todoId = req.params.id
        const {title, desc, author, status} = req.body
        try {
            const service = serviceLocator()
            const todo = await UpdateTodo(todoId, title, desc, author, status, service)
            let todoUpdate = service.todoSerialize.serialize(todo)
            if (todo) {
                res.json({message: "Task Has been Updated", todoUpdate})
            }
            
        } catch (err) {
            res.json({message: "There's Something Worng Updating Task"})
        }
    }
}

export default TodoController