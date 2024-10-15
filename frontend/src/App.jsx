import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Collection from './assets/pages/Collection'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Product from './assets/pages/Product'
import Cart from './assets/pages/Cart'
import Login from './assets/pages/Login'
import PlaceOrder from './assets/pages/PlaceOrder'
import Orders from './assets/pages/Orders'
import Home from './assets/pages/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import SearchBar from './assets/components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const backendUrl = import.meta.env.VITE_BACKEND_URL

  

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>
      <Footer/>

    </div>
  )
}

export default App