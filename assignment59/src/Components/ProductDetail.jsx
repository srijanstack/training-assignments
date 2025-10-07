import { useState, useEffect } from "react";
import Data from "../Data";
import { useParams } from "react-router-dom";

function Details({ setCart, cart}) {
  const [quant, setQuant] = useState(1);
  const [add, setAdded] = useState(false);

  const { sku } = useParams();
  let product;



  for (let item of Data) {
    if (item.id === +sku) product = item;
  }

  function addToCart() {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: quant,
    };
   
    setCart(cart=>[...cart, newItem])
    setAdded(true);
  }

  function inCart(){
    for(let c of cart){
      if(product.id === c.id)
        setAdded(true)
    }
  }

  useEffect(() => {
    inCart();
  }, [cart, product]);

  return (
    <>
      <div className="h-[95vh] lg:h-[90vh] w-[100vw] flex items-center justify-center bg-[#e0e0e0]">
        <div className="h-[600px] w-[350px] sm:w-[450px] md:w-[600px] md:h-[700px] lg:h-[450px] lg:w-[1000px] border-2 border-black rounded-xl p-5 flex justify-around bg-white flex-col lg:flex-row gap-1">
          <img
            className="lg:w-[45%] lg:h-full h-[55%] md:h-[60%]"
            src={product.img}
            alt="product"
          />
          <div className="lg:w-[50%]  w-full lg:py-2 p-0">
            <h1 className="lg:text-[1.9rem] text-[2rem] font-medium">
              {product.name}
            </h1>
            <h1 className="lg:text-[1.6rem] text-[1.6rem] font-semibold">
              ${product.price}
            </h1>
            <p className="md:text-[0.9rem] text-[0.8rem]">
              {product.description}
            </p>
            <div className="mt-6 flex w-full gap-2">
              <div className="flex w-[18%] lg:h-[35px] h-[45px] justify-between border border-black p-1 items-center rounded-md">
                <h1 className="w-[50%] text-center">{quant}</h1>
                <h1
                  className="border border-[#d2d2d2]  w-[50%]  h-6 flex justify-center items-center hover:cursor-pointer rounded-md"
                  onClick={() => (setQuant(quant + 1), setAdded(false))}
                >
                  +
                </h1>
              </div>
              <button
                className="p-1 h-[45px] lg:h-[35px] w-[170px] bg-[#ff4848] text-center rounded-md text-white"
                onClick={() => {addToCart()}}
              >
                {add ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
