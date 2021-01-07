import Todo from '../../../Domain/Todo/Todo.js'

export const UpdateTodo = (todoId, title, desc, author, status, {repository}) => {
    const todos = new Todo(todoId, title, desc, author, status)
    return repository.update(todos)
}