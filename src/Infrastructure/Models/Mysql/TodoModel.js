import Sequelize from 'sequelize'
import mysqlConn from '../../DbConnection/mysql.js'
import {v4 as uuidv4} from 'uuid'

const TodoModel = mysqlConn.define('Todo', {
    Uid: {
        primaryKey: true,
        type: Sequelize.UUID
    },
    title: {type: Sequelize.STRING},
    desc: {type: Sequelize.STRING},
    author: {type: Sequelize.STRING},
    status: {type: Sequelize.STRING},
    createdAt: {type: Sequelize.DATE, allowNull: true},
    updatedAt: {type: Sequelize.DATE, allowNull: true},
})

TodoModel.beforeCreate(u => u.Uid = uuidv4())

export default TodoModel