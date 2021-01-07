import  mongoose  from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectMongo = mongoose.createConnection(process.env.MongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    else return console.log("MongoDb has been Connected")
})