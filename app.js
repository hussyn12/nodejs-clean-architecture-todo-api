import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import user from './src/Http/Routes/user.js'
import todo from './src/Http/Routes/todo.js'
import auth from './src/Http/Routes/auth.js'

export const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use('/api/user', user)
app.use('/api/todo', todo)
app.use('/api/auth', auth)