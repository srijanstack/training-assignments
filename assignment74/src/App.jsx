import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import CartMain from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Forgor from "./Components/Forgotpassword";
import axios from "axios";
import AuthRoute from "./Components/Authroute";
import ProtectedRoute from "./Components/ProtectedRoute";
import  Loading from "./Components/Loading"

function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("my-cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [user, setUser] = useState(null);

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
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Landing query={query} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:sku"
            element={
              <ProtectedRoute>
                <Details setCart={setCart} cart={cart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartMain cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute user={user}>
                <Login setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route
            path="/forgot"
            element={
              <AuthRoute>
                <Forgor />
              </AuthRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
