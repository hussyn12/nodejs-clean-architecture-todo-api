const _serializeSingleTodo = (todo) => {
    return {
        'id': todo.id,
        'title': todo.title,
        'description': todo.desc,
        'author': todo.author,
        'status': todo.status
    }
}

class TodoSerialize {
    serialize(data) {
        if(!data) {
            throw new Error("Data is not defined")
        }
        if(Array.isArray(data)) {
            return data.map(_serializeSingleTodo)
        }
        return _serializeSingleTodo(data)
    }
}

export default TodoSerialize