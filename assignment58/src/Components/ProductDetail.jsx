import { useState } from "react";

function Details() {
  const [quant, setQuant] = useState(1);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="h-[95vh] lg:h-[90vh] w-[100vw] flex items-center justify-center bg-[#e0e0e0]">
        <div className="h-[600px] w-[350px] sm:w-[450px] md:w-[600px] md:h-[700px] lg:h-[450px] lg:w-[1000px] border-2 border-black rounded-xl p-5 flex justify-around bg-white flex-col lg:flex-row gap-1">
          <img
            className="lg:w-[45%] lg:h-full h-[55%] md:h-[60%]"
            src="https://i.pinimg.com/736x/af/3b/31/af3b311c6cf2851fe8c147537e3a6a61.jpg"
            alt="product"
          />
          <div className="lg:w-[50%]  w-full lg:py-2 p-0">
            <h1 className="lg:text-[1.7rem] text-[2rem] font-medium">Meow</h1>
            <h1 className="lg:text-[1.5rem] text-[1.6rem] font-semibold">$30.00</h1>
            <p className="md:text-[0.9rem] text-[0.8rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
              eligendi. Vero asperiores sint excepturi aut explicabo, quam
              provident quos, autem dolor pariatur aliquid. Dolorem vitae sequi
              vel temporibus, impedit quaerat?
            </p>
            <div className="mt-6 flex w-full gap-2">
              <div className="flex w-[18%] lg:h-[35px] h-[45px] justify-between border border-black p-1 items-center rounded-md">
                <h1 className="w-[50%] text-center">{quant}</h1>
                <h1
                  className="border border-[#d2d2d2]  w-[50%]  h-6 flex justify-center items-center hover:cursor-pointer rounded-md"
                  onClick={() => (setQuant(quant + 1), setCart(false))}
                >
                  +
                </h1>
              </div>
              <button
                className="p-1 h-[45px] lg:h-[35px] w-[170px] bg-[#ff4848] text-center rounded-md text-white"
                onClick={() => setCart(!cart)}
              >
                {cart ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
