import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Home/hero/hero'
import Products from '../components/Home/products/products'
import Bestseller from '../components/Home/bestseller/bestseller'
import Trending from '../components/Home/trending'
import Testimonials from '../components/Home/testimonials'
import Dotd from '../components/Home/dotd'
import Faq from '../components/Home/faq'
import Footer from '../components/footer'


const Home = () =>{

  return(

      <>
        <Navbar/>
        <Hero/>
        <Products/>
        <Bestseller/>
        <Trending/>
        <Testimonials/>
        <Dotd/>
        <Faq/>
        <Footer/>
      </>

  )
}

export default Home