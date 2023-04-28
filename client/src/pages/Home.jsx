import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsMainPage from '../components/ProductsMainPage'
import Slider from '../components/Slider'
import logo from '../images/logo.jpg';



const Home = () => {
  return (
    
    <div style={{backgroundColor:"white",height:"100vh",boxShadow: " rgba(50, 50, 93, 0.25) 0px 70px 100px -10px inset, rgba(0, 0, 0, 0.3) 0px 68px 76px -13px inset"}}> 

        <a href="https://google.com" class="button"  style = {{width: "100vw",height:"60vh",justifyContent:"center", display:"flex", alignItems: "center"}}> <img src={logo}style = {{width: "60vw",boxShadow: "0px 42px 79px 4px black"}} border ="0" ></img></a>
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