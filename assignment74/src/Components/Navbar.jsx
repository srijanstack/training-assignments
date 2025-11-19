import { Link } from "react-router-dom";
import { memo, useMemo } from "react";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import  Input  from "./NormalInput";
import withCart from "./WithCart";

function Navbar({ setQuery, cart }) {
  const totalItem = useMemo(() => {
    return Object.values(cart).reduce((a, c) => a + c, 0);
  }, [cart]);

  return (
    <>
      <div className="h-[70px] w-full bg-white flex items-center justify-around ">
        <Link to="/" className="h-full">
        <img
          className="max-h-[75%] md:h-[85%] lg:ml-20"
          src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
          alt="logo"
        />
        </Link>
        <div className="flex gap-2 md:gap-3 w-[50%] md:w-[40%] items-center h-full ">
          <input
            id="navInput"
            placeholder="Search"
            className="w-[80%] min-w-[100px] border h-[70%] md:min-w-[250px] md:h-[75%] rounded-4xl p-4 bg-[#ebebeb] text-black "
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to="/cart">
            <div className="relative rounded-[50%] flex items-cener justify-center bg-gray-200 p-3 ">
              <CiShoppingCart className="text-md sm:text-xl md:text-3xl" />
              <div className="flex items-center justify-center h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 rounded-[50%] bg-redbtn text-center text-[10px] absolute bottom-5 left-5 sm:bottom-5 sm:left-5 md:bottom-7 md:left-7">
                <span>{totalItem}</span>
              </div>
            </div>
          </Link>
          <Link to='/login' className="rounded-[50%] flex items-cener justify-center bg-gray-200 p-3">
            <CiUser className="text-md sm:text-xl md:text-3xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default memo(withCart(Navbar));
