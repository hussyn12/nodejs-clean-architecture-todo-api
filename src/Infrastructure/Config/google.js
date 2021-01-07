import pkg from 'googleapis'
const {google} = pkg
import dotenv from 'dotenv'
dotenv.config()

export const googleConfig = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirect: process.env.REDIRECT_URL,
}

export const defaultScope = ['https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email']

export const oAuthClient = new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
)                    