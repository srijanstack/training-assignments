import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import {  useState } from "react";
import CartMain from "./Components/Cart";
import NotFound from "./Components/NotFound";

function App() {

    const [query, setQuery] = useState("");
    const [cart, setCart] = useState({});



  return (
    <>
    <div className="min-h-screen flex flex-col">
    
    <Navbar setQuery={setQuery} cart={cart}/>

    
    <Routes>
      <Route path="/" element={<Landing  query={query}/>}/>
      <Route path="/products/:sku" element={<Details setCart={setCart} cart={cart}/>} />
      <Route path="/cart" element={<CartMain cart={cart} setCart={setCart}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

    <Footer/>
    </div>
    </>
  )
}

export default App;