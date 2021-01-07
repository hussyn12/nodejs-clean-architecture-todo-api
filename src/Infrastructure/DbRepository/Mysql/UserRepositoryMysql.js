import UserRepository from '../../../Domain/User/UserRepository.js'
import UserModel from '../../Models/Mysql/UserModel.js'
import User from '../../../Domain/User/User.js'

class UserRepositoryMysql extends UserRepository {

    constructor() {
        super()
    }

    async create(userEntity) {
        const {name, email, password} = userEntity
        const user = await UserModel.create({name, email, password})
        await user.save()
        return new User(user.userId, user.name, user.email, user.password)
    }

    async list() {
        const users = await UserModel.findAll()
        return users.map((user) => {
            return new User(user.userId, user.name, user.email, user.password)
        })
    }

    async getEmail(userEmail) {
        const user = await UserModel.findOne({where: {email: userEmail}})
        return new User(user.userId, user.name, user.email, user.password)
    }

    async remove(userId) {
        const user = await UserModel.findByPk(userId)
        if (user) {
            return user.destroy()
        }
        return false 
    }

    async update(userEntity) {
        const user = await UserModel.findByPk(userEntity.id)
        if (!user) return false
        const {name, email, password} = userEntity
        await user.update({name, email, password})
        return new User(user.userId, user.name, user.email, user.password)
    }
}
export default UserRepositoryMysql