import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar({ setQuery, cart }) {

    const totalItem = Object.values(cart).reduce((object, current) => 
      object + current
    , 0);
  

  return (
    <>
      <div className="h-[70px] w-full bg-white flex items-center justify-around ">
        <img
          className="h-[85%] lg:ml-20"
          src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
          alt="logo"
        />
        <div className="flex gap-3 w-[40%] items-center ">
          <input
            placeholder="Search"
            className="w-[80%] border h-[60%] rounded-3xl p-4 bg-[#ebebeb] "
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to="/cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-4xl" />
              <div className="h-6 w-6 p-[2px] rounded-[50%] bg-yellow-600 text-center text-[13px] absolute bottom-5 left-4">
                <span>{totalItem}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
