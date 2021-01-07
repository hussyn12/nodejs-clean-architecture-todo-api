const _serializeSingleUser = (user) => {
    return {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'password': user.password
    }
}

class UserSerialize {
    serialize(data) {
        if(!data) {
            throw new Error("Data is not defined")
        }
        if(Array.isArray(data)) {
            return data.map(_serializeSingleUser)
        }
        return _serializeSingleUser(data)
    }
}

export default UserSerialize