import  styled  from "styled-components"
import {products} from "../data"
import React,{ useEffect, useState } from "react";
import ProductsMainPageItem from "./ProductsMainPageItem"
import {mobile} from '../responsive';
import {isMobile} from 'react-device-detect';
import axios from "axios";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    
`

const ProductsMainPage = () => {

    //fetch only one product cuz we don't have more xd 
  const [products,setProducts] = useState([]);
  
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() =>{
    const getProducts = async () => {
      try{
        const res = await axiosInstance.get("/products/find/644bfdbd1e6cf16bf1a9b361");  //TODO CHECK THIS ID 2 axios check
  
        setProducts(res.data);
      }
      catch (err){console.log(err)}
    };
    getProducts();
    //BASE64 to image 
    // console.log(products);
    // const image = new Image();
    //   products.map(item => (
        
    //     image.src = 'data:image/png;base64,iVBORw0K...';
    //     item.img = await `data:image/jpg;base64,${item.img}`
    
    //  ))
  },[])
  

  return (
   <Container>
  
    {products.map(item => (
     // item.img = `data:image/png;base64,${item.img}`
      // var image = new Image();
    //  image.src = 'data:image/png;base64,iVBORw0K...';
    //  document.body.appendChild(image);
    
      item.id === 2 && isMobile  ?
        <ProductsMainPageItem item={item}/> 
        : !isMobile ? <ProductsMainPageItem item={item}/> 
        : ""
      
    ))}
   </Container>
  )
}

export default ProductsMainPage