import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsMainPage from '../components/ProductsMainPage'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <ProductsMainPage/>
        <Footer/>
    </div>
  )
}

export default Home