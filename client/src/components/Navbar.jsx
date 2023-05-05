import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Container = styled.div`
height: 12vh;
margin-bottom: 5px;
 ${mobile({height: "50px",width: "95vw",marginBottom:"15px"})} 
`;

const Wrapper = styled.div`
padding: 10px 20px; 
align-items: center;
display: flex;
justify-content: space-between;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
background-color: black;
color:white;
${mobile({padding: "3px 0px",height:"50px"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25 px;
  margin-right: 25 px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;


const MenuItem = styled.div`
font-size: 34px;
cursor: pointer;
margin-left: 25px;
margin-right:20px;
${mobile({fontSize: "20px", marginRight:"10px"})}
`

const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
margin-left: 15px;
margin-bottom: 15px;
${mobile({marginLeft: "15px", marginBottom:"0px", height:"30px", flex:"2"})} 

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${mobile({display: "none",})} 
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content:flex-end;
${mobile({justifyContent:"right", marginRight:"15px"})}
`;

const LogoBox = styled.a`
width: 20vw;
  height: 7vh;
  flex: 1;
  display: flex;
  align-content: center;
  `

const LogoImage = styled.img`
  display: flex;
  align-content: center;
  object-fit:scale-down;
  cursor:pointer;
  ${mobile({width: "60vw"})} 
`;




const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
        <Wrapper>
            <Left>
              {/* <SearchContainer>
                 <Input/>
                <Search style={{color:"gray", fontSize:16}}/>
              </SearchContainer> */}
            </Left>
            <Center>
              <Link to ="/">
              <LogoBox> <LogoImage src ="https://firebasestorage.googleapis.com/v0/b/neighbourh00d.appspot.com/o/logo.jpg?alt=media&token=96b82788-30a5-4c5a-bfc8-20152f0232d4"/> </LogoBox>
              </Link>
            </Center>
            <Right>
              {/* <MenuItem>REGISTER</MenuItem>
              <MenuItem>LOGIN</MenuItem> */}
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color='primary'>
                    <ShoppingCartOutlined ></ShoppingCartOutlined> 
                  </Badge>
                </MenuItem>
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar