class TodoRepository {
    async create(todoEntity) {
        throw new Error('ERROR CREATE METHOD NOT IMPLEMENTED')
    }

    async list() {
        throw new Error('ERROR FIND ALL METHOD NOT IMPLEMENTED')
    }

    async remove(todoId) {
        throw new Error('ERROR REMOVE METHOD NOT IMPLEMENTED')
    }

    async update(todoEntity) {
        throw new Error('ERROR UPDATE METHOD NOT IMPLEMENTED')
    }
}

export default TodoRepository