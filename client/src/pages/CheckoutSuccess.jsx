import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {clearCart } from "../redux/cartRedux";
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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState(null);
  const [checkoutInfo, setCheckoutInfo] = useState(null);
  const location = useLocation();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  
  // useEffect(() => {
  //   dispatch(clearCart());
  // }, [dispatch]);


  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get('session_id');

    const createOrder = async () => {
//TODO ENDPOINT TO SERVER ONE
      axios.get("http://localhost:8800/api/checkout/session/" + sessionId).then((res) => {
      setCheckoutInfo(res.data);
    });

      console.log(checkoutInfo);
      if(checkoutInfo !== null){
        //TODO ENDPOINT TO SERVER ONE
      axios.post("http://localhost:8800/api/orders",{
      //   userData:{
      //     name: res.data.customer_details.name,
      //     email :res.data.customer_details.email,
      //     phoneNumber: res.data.customer_details.phone,
      //     addressLine1: res.data.customer_details.address.line1,
      //     addressLine2: res.data.customer_details.address.line2,
      //     city: res.data.customer_details.address.city,
      //     zipCode: res.data.customer_details.address.postal_code,
      //     addressLine2: res.data.customer_details.address.line2,
      //     country: res.data.customer_details.address.country,
      //   },

      //   products:cart.products.map((item) => ({
      //     productId: item.productId,
      //     quantity: item.quantity,
      // })),
      // amount: res.data.amount_total/100,
      // status:"payment completed",
      // });
     
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

      products:cart.products.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
    })),
    amount: checkoutInfo.amount_total/100,
    status:"payment completed",
    });
   
    //TODO change axios to axiosinstance
  
  
  };
      createOrder();
}
  },[checkoutInfo,cart]);

  

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

