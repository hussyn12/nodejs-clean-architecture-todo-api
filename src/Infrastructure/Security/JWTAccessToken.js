import AccessToken from '../../Application/security/AccessToken.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

class JWTAccessToken extends AccessToken {
    generate(payload) {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '25m'})
    }

    decode(token) {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    }

    google(token) {
        return jwt.sign(token, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '25m'})
    }
}

export default JWTAccessToken