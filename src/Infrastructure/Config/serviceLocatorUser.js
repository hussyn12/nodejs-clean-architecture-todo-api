import UserRepositoryMongo from '../DbRepository/Mongo/UserRepositoryMongo.js'
import JWTAccessToken from '../Security/JWTAccessToken.js'
import GoogleAccessToken from '../Security/GoogleAccessToken.js'
import UserRepositoryMysql from '../DbRepository/Mysql/UserRepositoryMysql.js'
import UserSerializer from '../../Http/serializers/UserSerialize.js'
import constant from './constant.js'
import environment from './environment.js'

export const serviceLocator = () => {
    const beans = {
        accessToken: new JWTAccessToken(),
        userSerialize: new UserSerializer(),
        googleAccess: new GoogleAccessToken()
    }

    if(environment.database.dialect === constant.SUPPORTED_DATABASE.MONGO) {
        beans.repository = new UserRepositoryMongo()
    } else {
        beans.repository = new UserRepositoryMysql()
    }

    return beans
}