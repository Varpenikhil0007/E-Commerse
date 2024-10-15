import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRoter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


//App Config

const corsConfig ={
    origin : "*",
    credential:true,
    methods:["GET","POST","PUT","DELETE"],

};

const app =express()
const port =process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.options("",cors(corsConfig))
app.use(cors(corsConfig))


//api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRoter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("Api Working")

})

app.listen(port,()=>console.log('server started on PORT :' + port))