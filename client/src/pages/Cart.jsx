import styled  from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../images/hoodieCart.jpg';
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({padding:"10px",flexDirection:"column"})} 
`;


const CustomerSaleData = styled.div`
display:flex;
margin-left: 20px;
min-width:40%;
border: 0.5px solid lightgray;
border-radius: 5px;
margin-bottom:20px;
flex-direction:column;
height:fit-content;
justify-content: center;
`;

const Form = styled.form`

`;

const CustomerSaleDataTitle = styled.h1`
    display: flex;
    font-size:24px;
    font-weight:20px;
    justify-content: center;
`;

const Input = styled.input`
display:flex;
padding: 10px;
margin:15px 5px 15px 20px;
margin-left:auto;
margin-right:auto;
min-width: 80%;
${mobile({minWidth: "60%"})} 

`;
const Button = styled.button`
    width:40%;
    justify-items:end;
    margin:30px 15px 15px 10px;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight:600;
    margin-left: auto; 
margin-right: 10 px; 
`;

const OrderSummary = styled.div`
    flex:3;
`;

const ProductList = styled.div`
 border: 0.5px solid lightgray;
 border-radius: 5px;
 padding:10px;
`;

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})} 
`;

const Details = styled.span`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Image = styled.img`
    width:150px;
`;

Image.defaultProps ={
    src:img
};

const ProductName = styled.span`
    
`;

const ProductSize = styled.span`
    
`;

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items:center;
    margin-bottom:20px;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin:5x;
    ${mobile({margin:"10px 15px"})} 
`;

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:"20px"})} 
`;

const Hr = styled.div`
   background-color:#eee;
   border:none;
   height:1px;
   margin: 5px 0px 5px 0px;
`;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    padding: 20px;
    height:30vh;
    margin: 40px 0px;
    `;

const SummaryTitle = styled.h1`
    font-weight: 20px;
     
`;

const SummaryItem = styled.div`
    margin: 30px 0px; 
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};

`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;


export const Cart = () => {
  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <OrderSummary>
                    <ProductList>
                        <Product>
                            <ProductDetail>
                                <Image></Image>
                                <Details>
                                    <ProductName><b>Produkt: </b>Budo Hoodie</ProductName>
                                    <ProductSize><b>Rozmiar: </b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>    
                                </ProductAmountContainer>    
                                <ProductPrice> 400 zł</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image></Image>
                                <Details>
                                    <ProductName><b>Produkt: </b>Budo Hoodie</ProductName>
                                    <ProductSize><b>Rozmiar: </b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>    
                                </ProductAmountContainer>    
                                <ProductPrice> 400 zł</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </ProductList>
                    <Summary>
                        <SummaryTitle>PODSUMOWANIE</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText type="total">KWOTA</SummaryItemText>
                            <SummaryItemPrice>300 zł</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>DOSTAWA</SummaryItemText>
                            <SummaryItemPrice>15 zł</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">KWOTA DO ZAPŁATY</SummaryItemText>
                            <SummaryItemPrice>315 zł</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </OrderSummary>
                <CustomerSaleData>
                    <CustomerSaleDataTitle>DANE DO WYSYŁKI</CustomerSaleDataTitle> 
                        <Form>
                            <Input placeholder="name"/>
                            <Input placeholder="last name"/>
                            <Input placeholder="email"/>
                            <Input placeholder="phone number"/>
                            <Input placeholder="street"/>
                            <Input placeholder="city"/>
                            <Input placeholder="zip code"/>
                            <Input placeholder="country"/>
                            <Input placeholder="additional info"/>
                            {/* TODO agreement, button */}
                        </Form>
                        <Button> PRZEJDŹ DO PŁATNOŚCI</Button>
                </CustomerSaleData>
            </Wrapper>
        <Footer/>
    </Container>
  )
}


export default Cart