import { useState, useEffect } from "react";
import { getProduct } from "../Api";
import { useParams } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Details({ setCart, cart }) {
  const [quant, setQuant] = useState(1);
  const [add, setAdded] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { sku } = useParams();

  useEffect(() => {
    const p = getProduct(sku);
    p.then((res) => {
      setProduct(res);
      setLoading(false);
    }).catch(() => setLoading(true));
    setQuant(1);
    setAdded(false);
  }, [sku]);

  function addToCart() {
    setCart((cart) => {
      const updatedCart = { ...cart, [product.id]: quant };
      localStorage.setItem("my-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    setAdded(true);
  }

  useEffect(() => {
    if (product && cart[product.id]) {
      setAdded(true);
      setQuant(cart[product.id]);
    } else {
      setAdded(false);
    }
  }, [cart, product]);

  return (
    <>
      <div className="h-[700px] lg:h-[650px] w-full flex items-center justify-center bg-backgrey flex-grow">
        {!loading ? (
          <div className="h-[650px] w-[400px] sm:w-[450px] md:w-[600px] md:h-[650px] lg:h-[450px] lg:w-[1000px] border-2 border-black rounded-xl p-5 flex justify-around bg-white flex-col lg:flex-row gap-1">
            <img
              className="lg:w-[45%] lg:h-full h-[55%] "
              src={product.thumbnail}
              alt="product"
            />
            <div className="lg:w-[50%]  w-full lg:py-2 p-0">
              <h1 className="lg:text-[1.9rem] text-[2rem] font-medium">
                {product.title}
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
                    onClick={() => {
                      setQuant(quant + 1);
                      setAdded(false);
                    }}
                  >
                    +
                  </h1>
                </div>
                <button
                  className="p-1 h-[45px] lg:h-[35px] w-[170px] bg-redbtn text-center rounded-md text-white"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  {add ? "Added" : "Add to cart"}
                </button>
              </div>
              <div className="flex justify-around h-[45px] w-[180px]  items-center mt-4 ">
                {product.id != 1 && (
                  <Link
                    to={`/products/${product.id - 1}`}
                    className="bg-[#676767] h-[80%] w-[45%] rounded-3xl flex items-center justify-center"
                  >
                    <AiOutlineArrowLeft className="text-white text-2xl" />
                  </Link>
                )}
                <Link
                  to={`/products/${product.id + 1}`}
                  className="bg-[#676767] h-[80%] w-[45%] rounded-3xl flex items-center justify-center"
                >
                  <AiOutlineArrowRight className="text-white text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-20 w-[80%]  flex items-center justify-center text-[1.2rem] bg-white text-black ">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}

export default Details;
