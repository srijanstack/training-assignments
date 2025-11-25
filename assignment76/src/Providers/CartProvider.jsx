import { CartContext } from "../Contexts/Contexts";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("my-cart");
    return saved ? JSON.parse(saved) : {};
  });

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
