import express from 'express'
import AuthController from '../Controller/AuthController.js'

const auth = express.Router()

auth.post('/login', AuthController.login)
auth.get('/google', AuthController.google)
auth.get('/google/callback', AuthController.googleCallback)

export default auth