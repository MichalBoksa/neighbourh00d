import axios from "axios";
import styled  from "styled-components";
import { useSelector } from "react-redux";
import {mobile} from '../responsive';

const Button = styled.button`
    width:200px;
    justify-items:end;
    margin:0px 10px 15px auto;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight:600;
    /* margin-left: auto; 
    margin-right: 10 px; */
    cursor: pointer;
    ${mobile({marginLeft:"auto", marginRight:"auto"})} 
`;

const CheckoutForm = ({cartItems}) => {

    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
    const KEY = process.env.REACT_APP_STRIPE_KEY;
    const handleCheckout = () => {
        //TO DO CHANGE TO API SERVER HOST
        axios.post("http://localhost:8800/api/checkout/payment", {cartItems}).then((res) => {
            
            if(res.data.url){
                window.location.href = res.data.url;
            }
        }).catch((err) => console.log(err.message)); // TODO IMPROVE CATCH && 404 ERR WHEN NOT FOUND FROM THIS GUY https://www.youtube.com/watch?v=72iEz5iopqQ&ab_channel=ChaooCharles
    };

    return(
        <Button onClick={() => handleCheckout()}>PRZEJDŹ DO PŁATNOŚCI</Button>
    )
};

export default CheckoutForm;