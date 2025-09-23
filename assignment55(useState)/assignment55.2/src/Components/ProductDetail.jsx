import { useState } from "react";

function Details() {
    const [quant, setQuant] = useState(1);
    const [cart, setCart] = useState(false);

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[50%] w-[50%] border-2 border-black rounded-xl p-5 flex justify-around">
          <img
            className="w-[45%]"
            src="https://i.pinimg.com/736x/af/3b/31/af3b311c6cf2851fe8c147537e3a6a61.jpg"
            alt=""
          />
          <div className="w-[50%] py-2">
            <h1 className="text-[1.7rem] font-medium">Meow</h1>
            <h1 className="text-[1.5rem] font-semibold">$30.00</h1>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, cumque illo. Sed nam odit fuga dicta sequi eaque
              delectus vero perspiciatis tenetur. Accusantium expedita quis
              placeat consectetur quaerat facilis quam!
            </p>
            <div className="mt-6 flex w-full gap-2">
              <div className="flex w-[18%] h-[35px] justify-between border border-black p-1 items-center rounded-md" >
                <h1 className="w-[50%] text-center">{quant}</h1>
                <h1 className="border border-[#d2d2d2]  w-[50%]  h-6 flex justify-center items-center hover:cursor-pointer rounded-md" onClick={()=>(setQuant(quant+1), setCart(false))} >+</h1>
              </div>
              <button className="p-1 h-[35px] w-[170px] bg-[#ff4848] text-center rounded-md text-white" onClick={()=>setCart(!cart)}>
                {cart? "Added" :  "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
