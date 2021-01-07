import {oAuthClient} from '../../../Infrastructure/Config/google.js'
export const GoogleUrl = (authed, {googleAccess}) => {
    if (!authed) {
        const url = googleAccess.generate(oAuthClient)
        return url
    } else {
        const oAuth2 = googleAccess.OAuth()
        googleAccess.decode(oAuth2)
        return "You are Already Logged In"
    }
}