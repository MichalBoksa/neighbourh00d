import styled from "styled-components";
import { useEffect, useState } from "react";
import {mobile} from '../responsive';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
visibility:${(props) => props.id != "2" && "hidden"} ;

`;

const Container = styled.div`
flex:1;
margin: 3px;
background-color:${(props) => props.id != 2 && "white"} ;
height: 70vh;
position: relative;

&:hover ${Image}{
    opacity:0.8;
    transition: all 0.5s ease;
}
${mobile({height:"40vh", 
 width: `${(props) => props.id == "2" && "70vw" }`})} 
${mobile({ position: `${(props) => props.id == "2" && "absolute" }` })} ;
`;


const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
visibility:${(props) => props.id != "2" && "hidden" } ;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color:white;
    color:gray;
    cursor:pointer;
`;

const ProductsMainPageItem = ({item}) => {

  return (
    <Container id={item.id}>
      {/* TODO na sztywno 2 bo jeden produkt wysiwetlany na home */}
      <Link to ={`/product`}>
        <Image id={item.id} 
        src ={item.img}/>
        <Info id={item.id}>
          <Title>{item.title}</Title>
          <Button>ZOBACZ SZCZEGÓŁY</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default ProductsMainPageItem