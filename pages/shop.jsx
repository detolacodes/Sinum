import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import inputField from '../components/Shop/inputField'
import Products from '../components/Shop/products/products'
import Trending from '../components/Home/trending'
import Testimonials from '../components/Home/testimonials'
import Dotd from '../components/Home/dotd'
import Faq from '../components/Home/faq'
import Footer from '../components/footer'


const Shop = () =>{

  return(

      <>

        <Navbar/>
        <inputField/>
        <Products/>
        <Footer/>
      </>

  )
}

export default Shop