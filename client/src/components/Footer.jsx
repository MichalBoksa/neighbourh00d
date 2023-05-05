import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Room } from '@material-ui/icons';
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column", width: "95vw"})} 
    background-color:black;
    color:white;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
   
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f",padding:"0px 20px"})};
`;

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f",padding:"10px 20px", margin: "0px 5px 0px 5px"})} 
`;

const LogoImage = styled.img`
  width: 60%;
  /* flex: 1; */
  display: flex;
  align-content: center;
  
`;


const Desc = styled.p`
    font-weight: 700;
    font-size: 10px;
    margin-left:25px;
    margin-top:0;
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${mobile({flexDirection:"row"})} 
`;
const ContactItem = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: center;
`;
const Title = styled.h3`
    margin-bottom: 15px;
    ${mobile({marginTop:"5px"})} 
`;



const SocialIcon = styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    color:white;
    background-color: #${(props)=>props.color} ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 23px;
`;

const TikTokIcon = ({ color = "#000000" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-7 -8 63 63"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };


const Footer = () => {
  return (
    <Container>
        <Left>
            <LogoImage src ="https://firebasestorage.googleapis.com/v0/b/neighbourh00d.appspot.com/o/logo.jpg?alt=media&token=96b82788-30a5-4c5a-bfc8-20152f0232d4"/>
            <Desc>TWORZYMY UBRANIA. Z PASJĄ</Desc>
        </Left>
        <Center>
          <Title>Kontakt</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/> Łódź ul. Marysińska 69/72</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/> 793 395 555</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/> kontakt@neighborhood.pl</ContactItem>
        </Center>
        <Right><SocialContainer >
                <SocialIcon color ="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color ="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="ffffff">
                    <TikTokIcon />
                </SocialIcon>
            </SocialContainer></Right>
    </Container>
  )
}

export default Footer