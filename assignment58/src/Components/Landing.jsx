import stars from "../assets/black-five-rating-review-stars-png-img-70408169469774841dximozbe-removebg-preview.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing(props) {
  const [sort, setSort] = useState("");
  return (
    <>
      <Main
        data={props.data}
        query={props.query}
        sort={sort}
        setSort={setSort}
      />
    </>
  );
}

function Main({ data, query, sort, setSort }) {
  let mainData = data.filter(
    (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  if (sort === "price") {
    mainData = mainData.sort((a, b) => a.price - b.price);
  } else if (sort === "name") {
    mainData = mainData.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    );
  }

  return (
    <>
      <div className="w-full h-[auto] lg:h-[auto] bg-[#ebebeb] flex justify-center items-center">
        <div className="w-[90%] h-[auto] my-10 bg-white ">
          <div className="h-[60px] pt-2 mt-2 mx-10 flex justify-end  ">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#ebebeb] h-[80%] w-[180px] rounded-xl p-1 border-0"
            >
              <option value="">Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
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
      
        <div className="h-[430px]  w-[300px] sm:w-[280px] md:w-[320px] lg:w-[320px]  mt-1 flex flex-col items-center">
          <img src={props.img} alt="product" className="p-3 h-[80%] w-full" />
          <div className="w-full px-3 flex flex-col">
            <p className="text-[0.8rem] text-[#b3b3b3]">{props.category}</p>
            <h1>{props.name}</h1>
            <img className="w-[100px]" src={stars} alt="review" />
            <h1 className="text-[0.9rem]">${props.price}</h1>
          </div>
          <Link to={`/products/${props.name}`} className=" w-[80%] flex justify-end">
          
            <h1 className="text-[0.9rem] text-purple-500 text-decoration-line">View Details</h1>
          
          </Link>
        </div>
      
    </>
  );
}

export default Landing;
