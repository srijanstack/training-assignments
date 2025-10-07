import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Data from "./Data";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import CartMain from "./Components/Cart";

function App() {
    const [query, setQuery] = useState("");
    const [cart, setCart] = useState([]);

  return (
    <>
    <Navbar setQuery={setQuery}/>

    <Routes>
      <Route path="/" element={<Landing data={Data} query={query}/>}/>
      <Route path="/products/:sku" element={<Details setCart={setCart} cart={cart}/>} />
      <Route path="/cart" element={<CartMain cart={cart} setCart={setCart}/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App