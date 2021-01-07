import Todo from '../../../Domain/Todo/Todo.js'
import {TodoModel} from '../../Models/Mongoose/TodoModel.js'
import TodoRepository from '../../../Domain/Services/TodoService.js'

class TodoRepositoryMongo extends TodoRepository {

    constructor() {
        super()
    }

    async create(todoEntity) {
        const {title, desc, author, status} = todoEntity
        const todos = new TodoModel({title, desc, author, status})
        await todos.save()
        return new Todo(todos.id, todos.title, todos.desc, todos.author, todos.status)
    }

    async list() {
        const todoObjs = await TodoModel.find()
        return todoObjs.map((todoObj) => {
            return new Todo(todoObj.id, todoObj.title, todoObj.desc, todoObj.author, todoObj.status)
        })
    }

    async remove(todoId) {
        return await TodoModel.deleteOne({id: todoId})
    }

    async update(todoEntity) {
        const {title, desc, author, status} = todoEntity 
 
        const todos = await TodoModel.updateOne({id: todoEntity.id}, {title, desc, author, status})
        return new Todo(todos.id, todos.title, todos.desc, todos.author, todos.status)      
    }
}

export default TodoRepositoryMongo