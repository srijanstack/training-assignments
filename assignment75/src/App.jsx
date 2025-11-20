import Landing from "./Components/Landing";
import Details from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CartMain from "./Components/Cart";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Forgor from "./Components/Forgotpassword";
import axios from "axios";
import AuthRoute from "./Components/Authroute";
import ProtectedRoute from "./Components/ProtectedRoute";
import Loading from "./Components/Loading";
import { UserContext, AlertContext, CartContext } from "./Components/Contexts";


function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("my-cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState();

  const token = localStorage.getItem("token");

   function removeAlert(){
    setAlert(undefined);
  }

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
          setLoading(false);
        })
        .catch((err) => {
          console.log("Login first", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (loading) {
    return (
      <>
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <AlertContext.Provider value={{alert, setAlert, removeAlert}}>
            <Navbar setQuery={setQuery}  />

            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Landing query={query} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products/:sku" 
                element={
                  <ProtectedRoute>
                    <Details   />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartMain  />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
             
                    <Login />
           
                }
              />
              <Route
                path="/signup"
                element={
                  <AuthRoute>
                    <SignUp />
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
            </AlertContext.Provider>
          </CartContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
