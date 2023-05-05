import styled from "styled-components";
import { useEffect, useState } from "react";
import {mobile} from '../responsive';
import { Link, useLocation } from "react-router-dom";
import {isMobile} from 'react-device-detect';
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
background-color:${(props) => props.id != "644c02c06bb82f09c5267b5b" && "none"} ;
/* width:${(props) => props.id != "2" && "0%"} ; */
height: 70vh;
position: relative; 

&:hover ${Image}{
    opacity:0.8;
    transition: all 0.5s ease;
};
${mobile({height:"40vh",margin:"auto"})}; 

position: ${(props) =>( isMobile && props.id == "644c02c06bb82f09c5267b5b") && "absolute" }  ;
width:${(props) => (props.id == "644c02c06bb82f09c5267b5b" && isMobile) && "85vw" }  ;
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  return (
    <Container id={item._id}>
      {/* TODO na sztywno 2 bo jeden produkt wysiwetlany na home */}
      <Link to ={`/product/${item._id}`}>
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