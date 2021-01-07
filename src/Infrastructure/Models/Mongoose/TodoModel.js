import mongoose from 'mongoose'
import {v4 as uuidv4} from 'uuid'
import {connectMongo} from '../../DbConnection/mongodb.js'

const todoSchema = new mongoose.Schema ({
    id: { type: Object, default: function genUUUID() {
        return uuidv4()
    }},
    title: String,
    desc: String,
    author: String,
    status: String,
})

const TodoModel = connectMongo.model("Todos", todoSchema)

export default TodoModel