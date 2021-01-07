import Todo from '../../../Domain/Todo/Todo.js'

export const CreateTodo = (title, desc, author, status, {repository}) => {
    const todo = new Todo(null, title, desc, author, status)
    return repository.create(todo)
}