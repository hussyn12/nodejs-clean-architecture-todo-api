import {oAuthClient} from '../../../Infrastructure/Config/google.js'

export const GoogleCallback = (authed, code, {accessToken}) => {
    if (code) {
        oAuthClient.getToken(code, (err, token) => {
            if (err){
                console.log(err)
            } else {
                oAuthClient.setCredentials(token)
                authed = true
                return accessToken.google(token)
            }
        })
    }
}