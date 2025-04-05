import express from "express";
import connectDB from "./config/mongodb.config.js";
import cors from 'cors';
import userRouter from "./routes/user.route.js";
import connectCloudinary from "./config/cloudinary.js";
import orderRouter from "./routes/order.route.js";
import cartrouter from "./routes/cart.route.js";
import grainRouter from './routes/grain.route.js'
import dotenv from "dotenv";
dotenv.config();


const app =express();

connectDB();
connectCloudinary();

const allowedOrigins = ['https://grain-app-frontend.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log('CORS blocked for origin:', origin);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use('/api/grains', grainRouter);
app.use('/api/users', userRouter);
app.use('/api/order', orderRouter);
app.use('/api/cart', cartrouter);

app.get('/', (req,res)=> {
    console.log("Backend working fine");
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`app is serving on port ${PORT}` );
})