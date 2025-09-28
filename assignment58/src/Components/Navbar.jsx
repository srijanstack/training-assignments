function Navbar({setQuery}) {

  return (
    <>
      <div className="h-[70px] w-full bg-white flex items-center justify-around md:static fixed">
        <img
          className="h-[85%] ml-20"
          src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
          alt="logo"
        />
      <input placeholder="Search" className="w-[25%] border h-[60%] rounded-3xl p-4 bg-[#ebebeb] " onChange={(e)=>setQuery(e.target.value)} />
      </div>
    </>
  );
}

export default Navbar;