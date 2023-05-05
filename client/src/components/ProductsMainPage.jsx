import  styled  from "styled-components"
import {products} from "../data"
import React,{ useEffect, useState } from "react";
import ProductsMainPageItem from "./ProductsMainPageItem"
import {mobile} from '../responsive';
import {isMobile} from 'react-device-detect';
import axios from "axios";

const Container = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
`

const ProductsMainPage = () => {

  const [products,setProducts] = useState([]);
  
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() =>{
    const getProducts = async () => {
      try{
        const res = await axiosInstance.get("/products");  //TODO CHECK THIS ID 2 axios check
  
        setProducts(res.data);
        
      }
      catch (err){console.log(err)}
    };
    getProducts(); 
  },[])
  

  return (
  
   <Container>
{/* kolejnosc id jest tutaj wazna ze wzgledu na umiejscowienie zdjecia bluzy */}

  {products.map(item => (
  
        <ProductsMainPageItem item={item} key={item.id}/> 
    ))}
   </Container>
  );
};

export default ProductsMainPage