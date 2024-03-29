import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import {mobile} from '../responsive';
import {sliderItems} from "../data"
//TODO AUTO SLIDING

const Container = styled.div`
width: 100%;
height: 80vh; 
display: flex;
position: relative;
overflow: hidden;
padding-top:0.5em;
 ${mobile({height: "65vh", width: "95vw"})}
`; 

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props)=>props.slideIndex * - 100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};

`;

const ImageContainer = styled.div`
flex:1;
height:100%;

`;

const Image = styled.img`
/* height:80%;
width:100%; img with title desc */
 width: 100vw;
height: 100vh; 
object-fit:cover;
${mobile({height: "65vh"})}
`;


const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight : 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length - 1 )
        }
        else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>Przycisk</Button>
                        </InfoContainer>
                        </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider