import styled  from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import img from '../images/wspolne.jpg';
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive';
import {useEffect,useState} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
    ${mobile({padding:"10px", marginBottom:"10px"})} 
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

//  Image.defaultProps ={
//     src:img
// };

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
   width: 80%;
   display:flex;
   align-items: center;
   justify-content:space-between;
   ${mobile({width:"100%"})} 
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
    justify-content: space-between;
   
`;

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:5px;
    border:1px solid #DC143C;
    display:flex;
    align-items: center;
    justify-content:center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid #4169E1;
    background-color: white;
    cursor: pointer;
    font-weight:500;
    &:hover{
    background-color:#f8f4f4;
}
`;



export const Product = () => {

    
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(()=> {
    const getProduct = async () =>{
      try{
        const res = await axiosInstance.create({
          baseURL: process.env.REACT_APP_API_URL }).get("/products/find/"+id);
          setProduct((await res).data);
      }
      catch{}
    };
    getProduct();
  },[id]);

  const handleQuantity = (type) =>{
    if (type === "desc"){ quantity > 1 && setQuantity(quantity-1);}
      
    else if (type === "inc")
        setQuantity(quantity+1)
  }


  const handleClick = ()=>{
    dispatch(addProduct({...product, quantity, size}));
  };

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>{product.price} zł</Price>
                <FilterContainer>
                    <Filter>
                    <FilterTitle>Rozmiar</FilterTitle>
                    <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("desc")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>DODAJ DO KOSZYKA</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product;
