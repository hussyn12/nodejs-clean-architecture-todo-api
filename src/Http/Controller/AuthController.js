import {serviceLocator} from '../../Infrastructure/Config/serviceLocatorUser.js'
import {GetAccessToken} from '../../Application/use_cases/User/GetAccessToken.js'
import {VerifyAccessToken} from '../../Application/use_cases/User/VerifyAccessToken.js'
import {GoogleUrl} from '../../Application/use_cases/User/GoogleUrl.js'
import {GoogleCallback} from '../../Application/use_cases/User/GoogleCallback.js'

const authed = false

class AuthController {

    static async login (req, res) {
        const {email, password} = req.body
        const service = serviceLocator()
        try {
            const accessToken = await GetAccessToken(email, password, service)
            res.json(accessToken)
        }
        catch (err) {
            res.json({message: "An error occurred while logging in"})
        }
    }

    static async verify (req, res, next) {
        const header = req.headers.authorization
        const service = serviceLocator()
        try {
            const verifyToken = VerifyAccessToken(header, service)
            next()
            return verifyToken
        }
        catch (err) {
            res.json({message: "An error occurred while verifying"})
        }
    }

    static async google(req, res) {
        const service = serviceLocator()
        try {
            const url = GoogleUrl(authed, service)
            res.redirect(url)
        }
        catch (err) {
            res.json("Something Wrong Logging from Google")
        }
    }

    static async googleCallback(req, res) {
        const code = req.query.code
        const service = serviceLocator()
        try {
            const callback = GoogleCallback(authed, code, service)
            res.json({message: "You are Successfully Logged In", callback})
        }
        catch (err) {
            res.json("Something Worng For getting Google Callback")
        }
    }
}

export default AuthController