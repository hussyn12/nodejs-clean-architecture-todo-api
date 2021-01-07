import Sequelize from 'sequelize'
import {mysql} from '../Config/db.js'

const mysqlConn = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect
})

try {
    mysqlConn.authenticate()
    console.log('Mysql Connection has been established successfully.')
}
catch(err) {
    console.error('Unable to connect to database', err)
}

try {
    mysqlConn.sync()
    console.log("Database has synced successfully!")
}
catch(err) {
    console.log("Database sync Error: ", err)
}

export default mysqlConn