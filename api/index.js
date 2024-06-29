
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log('connect hogaya re baba')
}).catch((err) =>{
    console.log(err)
})
const app = express();

app.listen(3000,() => {
    console.log('chal raha bhai 3k mei')
})