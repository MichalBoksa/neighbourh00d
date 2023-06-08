import styled  from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive';
import { useSelector } from "react-redux";

const KEY = process.env.REACT_APP_STRIPE_KEY_PUBLIC;
const Container = styled.div`

`;

const Wrapper = styled.div`
    display:flex;
    flex-direction:"column";
    justify-content:space-between;
    margin:10px 0px 15px;
    ${mobile({padding:"10px",flexDirection:"column"})} 
`;


// const CustomerSaleData = styled.div`
// display:flex;
// margin-left: 20px;
// min-width:40%;
// border: 0.5px solid lightgray;
// border-radius: 5px;
// margin-bottom:20px;
// flex-direction:column;
// height:fit-content;
// justify-content: center;
// `;

// const Form = styled.form`

// `;

// const CustomerSaleDataTitle = styled.h1`
//     display: flex;
//     font-size:24px;
//     font-weight:20px;
//     justify-content: center;
// `;

// const Input = styled.input`
// display:flex;
// padding: 10px;
// margin:15px 5px 15px 20px;
// margin-left:auto;
// margin-right:auto;
// min-width: 80%;
// ${mobile({minWidth: "60%"})} 

// `;
// const Button = styled.button`
//     width:40%;
//     justify-items:end;
//     margin:30px 15px 15px 10px;
//     padding: 10px;
//     background-color: black;
//     color:white;
//     font-weight:600;
//     margin-left: auto; 
//     margin-right: 10 px;
//      cursor: pointer;
// `;

const OrderSummary = styled.div`
    flex:2;
    display:flex;
    ${mobile({marginLeft:"auto", marginRight:"auto"})} 
`;

const ProductList = styled.div`
 /* border: 0.5px solid lightgray;
 border-radius: 5px; */
 padding:10px;
 width:60vw;
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
    height:320px;
    margin: 10px 0px;
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
    const cart = useSelector(state=>state.cart);
   // const [quantity, setQuantity] = useState(cart.);

    // console.log(cart.products)
    // const handleQuantity = (type) =>{
    //     if (type === "desc"){ quantity > 1 && setQuantity(quantity-1);}
          
    //     else if (type === "inc")
    //         setQuantity(quantity+1)
    //   }
    
    
    //   const handleClick = ()=>{
    //     dispatch(addProduct({...product, quantity, size}));
    //   };
    

  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <OrderSummary>
                    <ProductList>
                        {cart.products.map(product => ( 
                        <><Product>
                                <ProductDetail>
                                    <Image src={product.img}></Image>
                                    <Details>
                                        <ProductName><b>Produkt: </b>{product.title}</ProductName>
                                        <ProductSize><b>Rozmiar: </b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice> {product.price * product.quantity} zł</ProductPrice>
                                </PriceDetail>
                            </Product><Hr /></>
                        ))
                        }
                    </ProductList>
             
                  
                </OrderSummary>

                <Summary>
                        <SummaryTitle>PODSUMOWANIE</SummaryTitle>
                        
                        <SummaryItem>
                            <SummaryItemText type="total">KWOTA</SummaryItemText>
                            <SummaryItemPrice>{cart.total} zł</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>DOSTAWA</SummaryItemText>
                            <SummaryItemPrice>15 zł</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total"><b>KWOTA DO ZAPŁATY</b></SummaryItemText>
                            <SummaryItemPrice>{cart.total} zł + dostawa </SummaryItemPrice>
                        </SummaryItem>
                        <Hr/>
                       <SummaryItem> 
                        <CheckoutForm cartItems={cart.products}/>
                        </SummaryItem>
                    </Summary>
            </Wrapper>
        <Footer/>
    </Container>
  )
}


export default Cart