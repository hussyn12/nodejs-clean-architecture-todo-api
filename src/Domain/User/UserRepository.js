class UserRepository {
    async create(userEntity) {
        throw new Error('ERROR CREATE METHOD NOT IMPLEMENTED')
    }

    async getEmail(userEmail) {
        throw new Error('ERROR FIND METHOD NOT IMPLEMENTED')
    }

    async list() {
        throw new Error('ERROR FIND ALL METHOD NOT IMPLEMENTED')
    }

    async remove(userId) {
        throw new Error('ERROR REMOVE METHOD NOT IMPLEMENTED')
    }

    async update(userEntity) {
        throw new Error('ERROR UPDATE METHOD NOT IMPLEMENTED')
    }
}
export default UserRepository