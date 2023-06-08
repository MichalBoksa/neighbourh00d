import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/cart" element={<Cart/>}/> 
          <Route exact path="/product" element={<Product/>}/> 
          <Route exact path="/product/:id" element={<Product/>}/> 
          <Route exact path="/checkoutSuccess" element={<CheckoutSuccess/>}/> 
        </Routes>
      </Router>
    );
  };
  
  export default App;