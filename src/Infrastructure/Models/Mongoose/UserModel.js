import mongoose from 'mongoose'
import {v4 as uuidv4} from 'uuid'
import {connectMongo} from '../../DbConnection/mongodb.js'

const userSchema = new mongoose.Schema ({
    id: { type: Object, default: function genUUUID() {
        return uuidv4()
    }},
    name: String,
    email: String,
    password: String,
})

const UserModel = connectMongo.model("User", userSchema)

export default UserModel