import Landing from "./Pages/Landing";
import Details from "./Pages/ProductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import CartMain from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Forgor from "./Pages/Forgotpassword";
import AuthRoute from "./Routes/Authroute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import UserProvider from "./Providers/UserProvider";
import CartProvider from "./Providers/CartProvider";
import QueryProvider from "./Providers/QueryProvider";
import AlertProvider from "./Providers/AlertProvider";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <UserProvider>
          <CartProvider>
            <QueryProvider>
              <AlertProvider>
                <ProtectedRoute>
                  <Navbar/>
                </ProtectedRoute>

                <Routes>
                  <Route
                    path="/products"
                    element={
                      <ProtectedRoute>
                        <Landing />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/products/:sku"
                    element={
                      <ProtectedRoute>
                        <Details />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <CartMain />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
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
              </AlertProvider>
            </QueryProvider>
          </CartProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
