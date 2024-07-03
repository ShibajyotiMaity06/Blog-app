
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';

dotenv.config()


mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log('connect hogaya re baba')
}).catch((err) =>{
    console.log(err)
})
const app = express();
app.use(cookieParser());

app.use(express.json());
app.listen(3000,() => {
    console.log('chal raha bhai 3k mei')
})

app.use('/api/user' , userRoutes);
app.use('/api/auth' , authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err , req , res , next) => {
const statusCode = err.statusCode || 500;
const message = err.message || 'Internal server error hai bhai';
res.status(statusCode).json({
    success: false,
    statusCode,
    message
})
})