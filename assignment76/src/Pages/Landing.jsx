import stars from "../assets/black-five-rating-review-stars-png-img-70408169469774841dximozbe-removebg-preview.png";
import { useEffect, useState, useMemo, memo, use } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getData } from "../Api";
import Loading from "../UI/Loading";
import { withQuery } from "../Components/HOC/WithPorvider";
import NoResult from "../UI/NoResult";
import { range } from "lodash";

function Landing(props) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let { page, sort } = params;

  page = +page || 1;

  function handleSort(value) {
    setSearchParams({ ...params, sort: value }, { replace: false });
  }

  useEffect(() => {}, [props.query]);

  useEffect(() => {
    getData({ sort, query: props.query, page })
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch(() => setLoading(true));
  }, [sort, page, props.query]);

  return (
    <>
      <Main
        data={productData.products}
        pageNo={productData.total}
        query={props.query}
        sort={sort}
        loading={loading}
        page={page}
        handleSort={handleSort}
      />
    </>
  );
}

function Main({ data, sort, loading, pageNo, page, handleSort }) {
  return (
    <>
      <div className="w-full h-[auto] lg:h-[auto] bg-backgrey flex justify-center items-center p-10 flex-grow">
        {!loading ? (
          data.length != 0 ? (
            <div className="w-[auto] h-[auto]  bg-white ">
              <Sort sort={sort} handleSort={handleSort} />
              <div className="h-auto w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 px-5  gap-4 box-border ">
                {data.map((item, index) => (
                  <Card
                    key={index}
                    img={item.thumbnail}
                    name={item.title}
                    category={item.category}
                    price={item.price}
                    id={item.id}
                  />
                ))}
              </div>
              <NextButtons pageNo={pageNo} page={page} />
            </div>
          ) : (
            <NoResult />
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

const Card = memo((props) => {
  return (
    <>
      <div className="h-[430px]  w-[300px] sm:w-[45vw] md:w-[30vw] lg:w-[22vw]  mt-1 flex flex-col items-center">
        <img src={props.img} alt="product" className="p-3 h-[80%] w-full" />
        <div className="w-full px-3 flex flex-col">
          <p className="text-[0.8rem] text-[#b3b3b3]">{props.category}</p>
          <h1>{props.name}</h1>
          <img className="w-[100px]" src={stars} loading="lazy" alt="review" />
          <h1 className="text-[0.9rem]">${props.price}</h1>
        </div>
        <Link
          to={`/products/${props.id}`}
          className=" w-[80%] flex justify-end"
        >
          <h1 className="text-[0.9rem] text-purple-500 text-decoration-line">
            View Details
          </h1>
        </Link>
      </div>
    </>
  );
});

function Sort({ sort, handleSort }) {
  return (
    <>
      <div className="h-[60px] pt-2 mt-2 mx-10 flex justify-end  ">
        <select
          id="selectID"
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
          className="bg-[#ebebeb] h-[80%] w-[180px] rounded-xl p-1 border-0"
        >
          <option value="default">Default</option>
          <option value="price">Price:low to high</option>
          <option value="price2">Price:high to low</option>
          <option value="title">Name:A-Z</option>
          <option value="title2">Name:Z-A</option>
        </select>
      </div>
    </>
  );
}

function NextButtons({ pageNo, page }) {
  pageNo = Math.ceil(pageNo / 20);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  return (
    <>
      <div className="max-w-auto  m-6 flex flex-wrap gap-3 text-white">
        {range(1, pageNo + 1).map((i) => (
          <Link
            to={`?${new URLSearchParams({ ...params, page: i }).toString()}`}
            className={
              "h-10 w-9 cursor-pointer flex items-center justify-center rounded-md " +
              (page != i
                ? "bg-red-500 hover:bg-red-600 "
                : " bg-blue-500 hover:bg-blue-600 ")
            }
            key={i}
          >
            {i}
          </Link>
        ))}
      </div>
    </>
  );
}

export default withQuery(Landing);
