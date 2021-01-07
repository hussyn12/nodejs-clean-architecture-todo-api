import Sequelize from 'sequelize'
import mysqlConn from '../../DbConnection/mysql.js'
import {v4 as uuidv4} from 'uuid'

const UserModel = mysqlConn.define('User', {
    userId: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
})

UserModel.beforeCreate(u => u.userId = uuidv4())

export default UserModel