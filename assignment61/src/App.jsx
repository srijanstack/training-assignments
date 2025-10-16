import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import  {getData} from "./Api"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import CartMain from "./Components/Cart";

function App() {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(()=>{
      getData().then(products=>setProductList(products));
    },[])

  return (
    <>
    <Navbar setQuery={setQuery}/>

    
    <Routes>
      <Route path="/" element={<Landing data={productList} query={query}/>}/>
      <Route path="/products/:sku" element={<Details setCart={setCart} cart={cart}/>} />
      <Route path="/cart" element={<CartMain cart={cart} setCart={setCart}/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App;