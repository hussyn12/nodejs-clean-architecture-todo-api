import {serviceLocator} from '../../Infrastructure/Config/serviceLocatorUser.js'
import {CreateUser} from '../../Application/use_cases/User/CreateUser.js'
import {DeleteUser} from '../../Application/use_cases/User/DeleteUser.js'
import {UpdateUser} from '../../Application/use_cases/User/UpdateUser.js'
import {UserList} from '../../Application/use_cases/User/UserList.js'

class UserController {
    static async create (req, res) {
        const {name, email, password} = req.body
        const service = serviceLocator()
        try {
            const user = await CreateUser(name, email, password, service)
            let creatUser = service.userSerialize.serialize(user)
            res.json({message: "User Has been Created", creatUser})
        } catch (err) {
            res.json({message: "There's Something Worng Creating User"})
        }
    }

    static async findAll (req, res) {
        try {
            const service = serviceLocator()
            const users = await UserList(service)
            res.json(users.map(service.userSerialize.serialize))
        }
        catch (err) {
            res.json({message: "There's Something Worng Finding All User"})
        } 
    }

    static async delete (req, res) {
        const userId = req.params.id
        try {
            const service = serviceLocator()
            const deleteUser = await DeleteUser(userId, service)
            res.json({message: "User has been deleted", deleteUser})
        } catch (err) {
            res.json({message: "There's Something Worng Deleting User"})
        }
    }

    static async update (req, res) {
        const userId = req.params.id
        const {name, email, password} = req.body
        try {
            const service = serviceLocator()
            const user = await UpdateUser(userId, name, email, password, service)
            let userUpdate = service.userSerialize.serialize(user)
            if (user) {
                res.json({message: "User Has been Updated", userUpdate})
            }
            
        } catch (err) {
            res.json({message: "There's Something Worng Updating User"})
        }
    }
}

export default UserController