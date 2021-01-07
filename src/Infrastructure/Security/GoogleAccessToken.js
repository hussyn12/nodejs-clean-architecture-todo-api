import AccessToken from '../../Application/security/AccessToken.js'
import {oAuthClient, defaultScope} from '../Config/google.js'
import pkg from 'googleapis'
const {google} = pkg

class GoogleAccessToken extends AccessToken {
    generate(auth) {
        return auth.generateAuthUrl({
            access_type: 'offline',
            scope: defaultScope
        })
    }

    OAuth() {
        return google.oauth2({
            version: 'v2',
            auth: oAuthClient
        })
    }

    decode(auth) {
        return auth.userinfo.v2.me.get(
            (err, res) => {
                if (err) return console.log(err)
    
                else {
                       console.log(res.data) 
                    }  
            }) 
    }
}

export default GoogleAccessToken