import stars from "../assets/black-five-rating-review-stars-png-img-70408169469774841dximozbe-removebg-preview.png";
import {  useState } from "react";

function Landing(props) {
  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar setQuery={setQuery}/>
      <Main data={props.data} query={query}/>
      <Footer />
    </>
  );
}

function Navbar({setQuery}) {

  return (
    <>
      <div className="h-[70px] w-full bg-white flex items-center justify-around">
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

function Main({data, query}) {

  const mainData = data.filter((item)=>item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  return (
    <>
      <div className="w-full h-[auto] lg:h-[auto] bg-[#ebebeb] flex justify-center items-center">
        <div className="w-[90%] h-[auto] my-10 bg-white ">
          <div className="h-[60px] pt-2 mt-2 mx-10 flex justify-end  ">
            <select
              name=""
              id=""
              className="bg-[#ebebeb] h-[80%] w-[180px] rounded-xl p-1 border-0"
            >
              <option value={""}>Sort by</option>
              <option value={Price}>Price</option>
              <option value={Name}>Name</option>
            </select>
          </div>
          <div className="h-[90%] w-full flex pb-10 px-5 flex-wrap gap-3 box-border ">
            {mainData.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                name={item.name}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="h-[430px]  w-[300px] sm:w-[280px] md:w-[320px] lg:w-[320px]  mt-1 ">
        <img src={props.img} alt="product" className="p-3 h-[80%] w-full" />
        <div className="w-full px-3 flex flex-col">
          <p className="text-[0.8rem] text-[#b3b3b3]">{props.category}</p>
          <h1>{props.name}</h1>
          <img className="w-[100px]" src={stars} alt="review" />
          <h1 className="text-[0.9rem]">${props.price}</h1>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="h-[70px] w-full bg-[#003967] text-[15px] text-white flex items-center justify-around ">
        <h1>Copyright 2022 | CodeYogi</h1>
        <h1>Powered by CodeYogi</h1>
      </div>
    </>
  );
}

export default Landing;
