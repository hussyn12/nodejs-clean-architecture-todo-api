import dotenv from 'dotenv'
dotenv.config()

export const mysql = {
    
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    dialect: "mysql"
}