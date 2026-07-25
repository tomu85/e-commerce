import React from 'react'
import Navbar from './assets/components/Navbar'
import SearchByCategory from './assets/components/SearchByCategory'
import Product from './assets/components/Product'
import AboutUs from './assets/components/AboutUs'
import Footer from './assets/components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Hero from './assets/components/Hero'
import ContactUs from './assets/components/ContactUs'
import ProductDetails from './assets/components/ProductDetails'
import AboutPage from './assets/components/AboutPage'

const App = () => {
  return (
    <>
   <Navbar/>


   <Routes>

    <Route path='/' element={<Home/>}/>
     <Route path='/Hero' element={<Hero/>}/>
     {/* <Route path='/Category' element={ <SearchByCategory/>}/> */}

     
      <Route path='/Category' element={<Outlet/>}>
       <Route index element={<SearchByCategory/>}/>
       <Route path=':id' element={<ProductDetails/>}/>
     </Route>

      <Route path='/Products' element={<Product/>}/>
     <Route path="/aboutus" element={<AboutUs />} />
       <Route path='/about' element={<AboutPage/>}/>
      <Route path="/contactus" element={<ContactUs />} />
        <Route path='/footer' element={<Footer/>}/>
   </Routes>
   <Footer/>

    </>
  )
}

export default App
