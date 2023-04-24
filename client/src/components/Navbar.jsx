import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg';
import {mobile} from '../responsive';

const Container = styled.div`
height: 60px;
margin-bottom: 6vh;
 ${mobile({height: "50px"})} 
`;

const Wrapper = styled.div`
padding: 10px 20px; 
align-items: center;
display: flex;
justify-content: space-between;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
background-color: black;
color:white;
${mobile({padding: "10px 0px"})}
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

const LogoImage = styled.img`
  width: 20vw;
  height: 7vh;
  flex: 1;
  display: flex;
  align-content: center;
  object-fit:scale-down;
`;

LogoImage.defaultProps = {
  src: logo,
};

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft:"10px"})}
`

const Center = styled.div`
flex: 1;
display: flex;
align-items: center;
margin-left: 15px;
margin-bottom: 15px;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content:flex-end;
${mobile({justifyContent:"center"})}
`;



const Navbar = () => {
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
              <LogoImage/>
            </Center>
            <Right>
              {/* <MenuItem>REGISTER</MenuItem>
              <MenuItem>LOGIN</MenuItem> */}
              <MenuItem>
                <Badge color='primary'>
                  <ShoppingCartOutlined></ShoppingCartOutlined> 
                </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar