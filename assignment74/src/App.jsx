import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import CartMain from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Forgor from "./Components/Forgotpassword";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("my-cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => console.log("Login first", err));
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar setQuery={setQuery} cart={cart} />

        <Routes>
          <Route path="/" element={<Landing query={query} />} />
          <Route
            path="/products/:sku"
            element={<Details setCart={setCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<CartMain cart={cart} setCart={setCart} />}
          />
          <Route path="/login" element={<Login  setUser={setUser}/> } />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/forgot" element={<Forgor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
