import styled  from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import img from '../images/wspolne.jpg';
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive';

//TODO add to cart button
const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({padding:"10px", flexDirection:"column"})} 
`;

const ImageContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:100%;
    height:80vh;
    object-fit:cover;
    ${mobile({height:"40vh"})} 
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})} 
`;

const Title = styled.h1`
    font-weight:200;
    `;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

 Image.defaultProps ={
    src:img
};

const FilterContainer = styled.div`
    width:50%;
    margin: 35px 0px; 
    display:flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.div`
    font-size:20px;
    font-weight:200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
   width: 50%;
   display:flex;
   align-items: center;
   justify-content:space-between;
   ${mobile({width:"100%"})} 
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:5px;
    border:1px solid red; 
    display:flex;
    align-items: center;
    justify-content:center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    font-weight:500;

    &:hover{
    background-color:#f8f4f4;
}
`;



export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>Test title</Title>
                <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Rozmiar</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>DODAJ DO KOSZYKA</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product
