import TodoModel from '../../Models/Mysql/TodoModel.js'
import Todo from '../../../Domain/Todo/Todo.js'
import TodoRepository from '../../../Domain/Todo/TodoRepository.js'

class TodoRepositoryMysql extends TodoRepository {
    
    constructor() {
        super()
    }

    async create(todoEntity) {
        const {title, desc, author, status} = todoEntity
        const todo = await TodoModel.create({title, desc, author, status})
        await todo.save()
        return new Todo(todo.Uid, todo.title, todo.desc, todo.author, todo.status)
    }

    async list() {
        const todos = await TodoModel.findAll()
        return todos.map((todo) => {
            return new Todo(todo.Uid, todo.title, todo.desc, todo.author, todo.status)
        })
    }

    async remove(todoId) {
        const todo = await TodoModel.findByPk(todoId)
        if (todo) {
            return todo.destroy()
        }
        return false
    }

    async update(todoEntity) {
        const todo = await TodoModel.findByPk(todoEntity.id)
        if (!todo) return false
        const {title, desc, author, status} = todoEntity
        await todo.update({title, desc, author, status})
        return new Todo(todo.Uid, todo.title, todo.desc, todo.author, todo.status)
    }
}
export default TodoRepositoryMysql