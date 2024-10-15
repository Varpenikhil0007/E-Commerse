import express from 'express'
import { addToCart,getUserCart, updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'


const cartRoter = express.Router()

cartRoter.post('/get',authUser ,getUserCart)
cartRoter.post('/add',authUser ,addToCart)
cartRoter.post('/update',authUser ,updateCart)


export default cartRoter