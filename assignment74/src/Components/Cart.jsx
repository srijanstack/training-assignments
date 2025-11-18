import { useEffect } from "react";
import { getProduct } from "../Api";
import { useState, useMemo, memo, useCallback, useRef } from "react";

function CartMain({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState(cart);
  const cartKeys = useMemo(() => Object.keys(cart), [cart]);
  useEffect(() => {
    const promise = cartKeys.map((id) => getProduct(id));
    const bigPromise = Promise.all(promise);
    bigPromise
      .then((p) => setProducts(p))
      .catch(console.log("Could not fetch data"));
  }, [cart]);

  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <div className="w-[95%] md:w-[80%] bg-white flex flex-col items-center justify-center py-10">
          {cartKeys.length !== 0 ? (
            <>
              <CartItems cart={localCart} setCart={setLocalCart} productList={products} updateCart={setCart}/>
              <CheckOut cart={localCart} productList={products} />
            </>
          ) : (
            <span>Cart is empty</span>
          )}
        </div>
      </div>
    </>
  );
}

function CartItems({ cart, updateCart, setCart ,productList }) {
  const deleteItem = useCallback(
    (deleteId) => {
      updateCart((prevCart) => {
        const updatedCart = { ...prevCart };
        delete updatedCart[deleteId];
        localStorage.setItem("my-cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [setCart]
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="h-[50px] bg-[#f7f7f7] lg:w-[65vw] w-[90vw] md:w-[70vw] sm:-[90vw] flex items-center border-t  border-l border-r border-[#c0c0c0]">
          <div className="h-full w-[60%] flex justify-center items-center">
            <span>Product</span>
          </div>
          <div className="h-full w-[35%] hidden sm:flex justify-between items-center">
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        {productList.map((product) => {
          if (!product) return null;
          return (
            <Items
              key={product.id}
              product={product}
              quantity={cart[product.id]}
              cart={cart}
              setCart={setCart}
              deleteItem={deleteItem}
            />
          );
        })}
        <CouponRow cart={cart} updateCart={updateCart}/>
      </div>
    </>
  );
}

const Items = memo(({ cart, setCart, product, quantity, deleteItem }) => {
  function handleQunatity(e) {
    const newQuant = +e.target.value;
    const newCart = { ...cart, [product.id]: newQuant };
    setCart(newCart);
  }

  return (
    <>
      <div className="h-[150px] sm:h-[60px] lg:w-[65vw] md:w-[70vw] w-[90vw] sm:w-[90vw] flex flex-col sm:flex-row items-center border-t border-l border-r border-[#c0c0c0]">
        <div className="h-full w-full sm:w-[60%] flex items-center justify-between px-5">
          <div
            className="rounded-[50%] border border-[#c0c0c0]  px-2 py-1 text-[0.6rem] cursor-pointer"
            onClick={() => deleteItem(product.id)}
          >
            X
          </div>
          <div className="h-full  flex items-center w-[90%] pl-2 sm: gap-20">
            <img
              src={product.thumbnail}
              alt="item"
              className="h-[75%] w-[50px]"
            />
            <span className="text-[#ff4848] font-semibold">
              {product.title}
            </span>
          </div>
        </div>
        <div className="h-full w-full sm:w-[35%] flex justify-around sm:justify-between items-center">
          <span className="font-semibold">${product.price}</span>

          <input
            className="h-[50%] w-[50px] rounded-xl border border-[#d2d2d2] flex items-center justify-center text-[0.8rem] text-[#2b2b2b] p-2"
            type="number"
            onChange={handleQunatity}
            min={1}
            max={99}
            value={quantity}
          />

          <span className="font-semibold">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
});

function CheckOut({ cart, productList }) {
  const { total, discount } = useMemo(() => {
    let totalCalc = 0;
    let discountCalc = 0;
    for (let id in cart) {
      const product = productList.find((p) => p.id === +id);
      if (!product) continue;
      const qty = cart[id];
      totalCalc += product.price * qty;
      discountCalc += product.price * (product.discountPercentage / 100) * qty;
    }
    return {
      total: +totalCalc.toFixed(2),
      discount: +discountCalc.toFixed(2),
    };
  }, [cart, productList]);

  return (
    <>
      <div className="h-[300px] w-[70vw] lg:w-[30vw] md:w-[40vw] sm:w-[70vw] mt-5 lg:relative  left-50 border border-[#c0c0c0] flex flex-col items-center">
        <div className="h-[20%] w-full border-b bg-[#f7f7f7] flex items-center pl-3 border-[#c0c0c0]">
          <span className="text-[1.2rem]">Cart Totals</span>
        </div>
        <div className="h-[50%] w-[75%]">
          <div className="h-[40%] border-b border-[#c0c0c0] flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">${total}</span>
          </div>
          <div className="h-[40%] border-b border-[#c0c0c0] flex items-center justify-between">
            <span>Discount</span>
            <span className="font-semibold">${discount}</span>
          </div>
          <div className="h-[40%] border-b border-[#c0c0c0] flex items-center justify-between">
            <span>Total</span>
            <span className="font-semibold">
              ${(total - discount).toFixed(2)}
            </span>
          </div>
        </div>
        <button className="h-[20%] w-[85%] bg-[#ff4848] rounded-md mt-5">
          <span className="text-white">Procced to Checkout</span>
        </button>
      </div>
    </>
  );
}

function CouponRow({ cart, updateCart }) {
  const [disable, setDisable] = useState(true);
  const isFirstRender = useRef(true);
  function handleUpdate() {
    updateCart(cart);
    localStorage.setItem("my-cart", JSON.stringify(cart));
    console.log("h");
    setDisable(true);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // skip first run
    }
    setDisable(false);
  }, [cart]);

  return (
    <>
      <div className="h-[50px] bg-white lg:w-[65vw] md:w-[70vw] w-[90vw] sm:w-[90vw] flex items-center border border-[#c0c0c0] px-2 justify-between">
        <div className="items-center flex gap-1 h-full">
          <input
            placeholder="Coupon Code"
            className="w-[100px] text-sm sm:text-md sm:w-[150px] md:w-[200px] h-[80%] border bg-white  border-[#c0c0c0] p-2"
          />
          <button className="w-[100px] text-sm sm:text-md sm:w-[150px] lg:w-[200px] h-[80%] bg-[#ff4848]  text-white p-2 flex items-center justify-center ">
            <span>Apply Coupon</span>
          </button>
        </div>
        <button
          className="w-[100px] text-sm sm:text-md sm:w-[150px] lg::w-[200px] h-[80%] bg-[#ff4848]  text-white p-2 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200"
          onClick={handleUpdate}
          disabled={disable}
        >
          Update Cart
        </button>
      </div>
    </>
  );
}

export default CartMain;
