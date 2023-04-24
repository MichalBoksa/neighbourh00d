import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsMainPage from '../components/ProductsMainPage'
import Slider from '../components/Slider'
import logo from '../images/logo.jpg';



const Home = () => {
  return (
    
    <div style={{backgroundColor:"black",height:"100vh"}}> 

        <a href="https://google.com" class="button" style = {{marginLeft:"1",MarginRight:"1"}}> <img src={logo} border="0" ></img></a>
    </div>
    // <div>
    //     <Navbar/>
    //     <Slider/>
    //     <ProductsMainPage/>
    //     <Footer/>
    // </div>
  )
}

export default Home