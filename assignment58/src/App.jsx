import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Data from "./Data";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");

  return (
    <>
    <Navbar setQuery={setQuery}/>

    <Routes>
      <Route path="/" element={<Landing data={Data} query={query}/>}/>
      <Route path="/products/:name" element={<Details/>}/>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App