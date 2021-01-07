import TodoRepositoryMongo from '../DbRepository/Mongo/TodoRepositoryMongo.js'
import TodoRepositoryMysql from '../DbRepository/Mysql/TodoRepositoryMysql.js'
import TodoSerializer from '../../Http/serializers/TodoSerialize.js'
import constant from './constant.js'
import environment from './environment.js'


export const serviceLocator = () => {
    const beans = {
        todoSerialize: new TodoSerializer()
    }

    if(environment.database.dialect === constant.SUPPORTED_DATABASE.MONGO) {
        beans.repository = new TodoRepositoryMongo()
    } else {
        beans.repository = new TodoRepositoryMysql()
    }

    return beans
}