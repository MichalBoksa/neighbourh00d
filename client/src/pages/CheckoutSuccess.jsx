import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import {mobile} from '../responsive';

const Container = styled.div`
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Info = styled.div`

 height:100vh;
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }

  ${mobile({justifyContent:"flex-start", marginTop:"40px",padding:"20px",})} 
`;

const CheckoutSuccess = () => {
  const [checkoutInfo, setCheckoutInfo] = useState([]);
  const [lineItems, setLineItems] = useState([]);
  const location = useLocation();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [sessionId,setSessionId] = useState(new URLSearchParams(location.search).get('session_id'));

  //TODO CHANGE API TO SERVER ONE
  
  const fetchData = async () => {
    if(sessionId.length > 0 &&sessionId !== undefined && sessionId !== null )
    try{
      
      const {data: res} =  await axios.get("http://localhost:8800/api/checkout/sessions/" + sessionId);
      setCheckoutInfo(res);

      const {data: resLineItems} =  await axios.get("http://localhost:8800/api/checkout/sessions/" + sessionId + "/line_items");
      setLineItems(resLineItems);

    }
    catch (error) {
      console.error(error.message);
    }
  } 

  useEffect(() => {fetchData(); },[]);

  useEffect(() =>{
    const createOrder = async () => {
      //TODO ENDPOINT TO SERVER ONE
      console.log(checkoutInfo);
     if( lineItems !== null && checkoutInfo !== null &&
      lineItems !== undefined && checkoutInfo !== undefined ){
      try{
       //TODO ENDPOINT TO SERVER ONE
     await axios.post("http://localhost:8800/api/orders",{
    
     userData:{
       name: checkoutInfo.customer_details.name,
       email :checkoutInfo.customer_details.email,
       phoneNumber: checkoutInfo.customer_details.phone,
       addressLine1: checkoutInfo.customer_details.address.line1,
       addressLine2: checkoutInfo.customer_details.address.line2,
       city: checkoutInfo.customer_details.address.city,
       zipCode: checkoutInfo.customer_details.address.postal_code,
       addressLine2: checkoutInfo.customer_details.address.line2,
       country: checkoutInfo.customer_details.address.country,
     },

     products:lineItems.data.map((item) => ({
       productId: item.id,
       quantity: item.quantity,
   })),
   amount: checkoutInfo.amount_total/100,
   status:"payment completed",
   }).then(() =>{
    setSessionId('');
   }
  
   );

  }
  catch (error) {
    console.error(error.message);
  }
  
   //TODO change axios to axiosinstance
 
 };
}
    createOrder();
    
  },[checkoutInfo,lineItems]);


  

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Info>
        <h2>Twoje zamówienie zostało złożone!</h2>
        <p>Potwierdzenie zamówienia wraz z rachunkiem zostało wysłane na podany wcześniej adres email</p>
        <p>
            W razie pytań prosimy o wiadomość na adres {" "}
            <strong>support@nbhd.com</strong>
        </p>
        </Info>
        </Wrapper>
      <Footer/>
    </Container>
  );
};

export default CheckoutSuccess;

