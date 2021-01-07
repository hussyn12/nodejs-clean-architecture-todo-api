import UserRepository from '../../../Domain/User/UserRepository.js'
import UserModel from '../../Models/Mongoose/UserModel.js'
import User from '../../../Domain/User/User.js'

class UserRepositoryMongo extends UserRepository {

    constructor() {
        super()
    }

    async create(userEntity) {
        const {name, email, password} = userEntity
        const user = new UserModel({name, email, password})
        await user.save()
        return new User(user.Uid, user.name, user.email, user.password)
    }

    async list() {
        const userObjs = await UserModel.find()
        return userObjs.map((userObj) => {
            return new User(userObj.id, userObj.title, userObj.desc, userObj.author, userObj.status)
        })
    }

    async getEmail(userEmail, userPassword) {
        const todo = await TodoModel.find({email: userEmail, password: userPassword})
        return new User(user.Uid, user.name, user.email, user.password)
    }

    async remove(userId) {
        return await UserModel.deleteOne({id: userId})
    }

    async update(userEntity) {
        const {name, email, password} = userEntity
        const user = await UserModel.updateOne({id: userEntity.id}, {name, email, password})
        return new User(user.Uid, user.name, user.email, user.password)  
    }
}

export default UserRepositoryMongo