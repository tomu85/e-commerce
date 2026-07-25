import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchByCategory from '../components/SearchByCategory'
import Product from '../components/Product'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import ProductDetails from '../components/ProductDetails'
import AboutPage from '../components/AboutPage'
import WhatsAppButton from '../components/WhattsappButton '

const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <SearchByCategory />
            <Product />
            <AboutUs />
            <ContactUs />
            {/* <Footer /> */}
            <ProductDetails/>
            {/* <AboutPage/> */}
            <WhatsAppButton/>
        </>
    )
}

export default Home
