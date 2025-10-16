function CartMain({ cart, setCart }) {
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <div className="w-[95%] md:w-[80%] bg-white flex flex-col items-center justify-center py-10">
          {cart.length !== 0 ? (
            <>
              <CartItems cart={cart} setCart={setCart} />
              <CheckOut cart={cart} />
            </>
          ) : (
            <span>Cart is empty</span>
          )}
        </div>
      </div>
    </>
  );
}

function CartItems({ cart, setCart }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-[50px] bg-[#f7f7f7] lg:w-[65vw] w-[90vw] md:w-[70vw] sm:-[90vw] flex items-center border-t  border-l border-r border-[#c0c0c0]">
          <div className="h-full w-[60%]  flex justify-center items-center">
            <span>Product</span>
          </div>
          <div className="h-full w-[35%] hidden sm:flex justify-between items-center">
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        {cart.map((item, index) => (
          <Items key={index} item={item} cart={cart} setCart={setCart} />
        ))}
        <div className="h-[50px] bg-white lg:w-[65vw] md:w-[70vw] w-[90vw] sm:w-[90vw] flex items-center border border-[#c0c0c0] px-2 justify-between">
          <div className="items-center flex gap-1 h-full">
            <input
              placeholder="Coupon Code"
              className="w-[120px] sm:w-[150px] md:w-[200px] h-[80%] border bg-white  border-[#c0c0c0] p-2"
            />
            <div className="w-[120px] sm:w-[150px] md:w-[200px] h-[80%] bg-[#ff4848]  text-white p-2 flex items-center justify-center ">
              <span>Apply Coupon</span>
            </div>
          </div>
          <button className="w-[120px] sm:w-[150px] md:w-[200px] h-[80%] bg-[#ff4848]  text-white p-2 flex items-center justify-center">
            Update Cart
          </button>
        </div>
      </div>
    </>
  );
}

function Items({ item, cart, setCart }) {
  function deleteItem(deleteid) {
    const updatedCart = cart.filter((item) => item.id !== deleteid);
    setCart(updatedCart);
  }
  return (
    <>
      <div className="h-[150px] sm:h-[60px] lg:w-[65vw] md:w-[70vw] w-[90vw] sm:w-[90vw] flex flex-col sm:flex-row items-center border-t border-l border-r border-[#c0c0c0]">
        <div className="h-full w-full sm:w-[60%] flex items-center justify-between px-5">
          <div
            className="rounded-[50%] border border-[#c0c0c0]  px-2 py-1 text-[0.6rem] cursor-pointer"
            onClick={() => deleteItem(item.id)}
          >
            X
          </div>
          <div className="h-full  flex items-center w-[90%] pl-2 sm: gap-20">
            <img src={item.img} alt="item" className="h-[75%] w-[50px]" />
            <span className="text-[#ff4848] font-semibold">{item.name}</span>
          </div>
        </div>
        <div className="h-full w-full sm:w-[35%] flex justify-around sm:justify-between items-center">
          <span className="font-semibold">${item.price}</span>

          <div className="h-[50%] w-[40px] rounded-xl border border-[#d2d2d2] flex items-center justify-center text-[0.8rem] text-[#2b2b2b]">
            <span>{item.quantity}</span>
          </div>
          <span className="font-semibold">${item.price * item.quantity}</span>
        </div>
      </div>
    </>
  );
}

function CheckOut({ cart }) {
  let total = 0;
  let discount = 0;

  for (let i of cart) {
      console.log(i.discount)
    total += +i.price * +i.quantity;
    discount += (+i.price*(+i.discount/100)) * i.quantity || 0;
  }
  total = total.toFixed(2);
  discount = discount.toFixed(2);

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
            <span className="font-semibold">${(total-discount).toFixed(2)}</span>
          </div>
        </div>
        <button className="h-[20%] w-[85%] bg-[#ff4848] rounded-md mt-5">
          <span className="text-white">Procced to Checkout</span>
        </button>
      </div>
    </>
  );
}

export default CartMain;
