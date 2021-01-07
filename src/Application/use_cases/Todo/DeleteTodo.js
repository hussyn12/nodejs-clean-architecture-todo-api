export const DeleteTodo = (todoId, {repository}) => {
    return repository.remove(todoId)
}