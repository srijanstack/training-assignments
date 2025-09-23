import stars from "../assets/black-five-rating-review-stars-png-img-70408169469774841dximozbe-removebg-preview.png";

function Landing(props) {
  return (
    <>
      <Navbar />
      <Main />
      <Footer  />
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="h-[70px] w-full bg-white flex items-center">
        <img
          className="h-[85%] ml-20"
          src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
          alt="logo"
        />
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <div className="w-full h-[auto] lg:h-[auto] bg-[#ebebeb] flex justify-center items-center">
        <div className="w-[90%] h-[auto] my-10 bg-white ">
          <div className="h-[60px] pt-2 mt-2 mx-10 flex justify-end  ">
            <select name="" id="" className="bg-[#ebebeb] h-[80%] w-[180px] rounded-xl p-1 border-0">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="h-[90%] w-full flex pb-10 px-5 flex-wrap gap-3 box-border ">
            <Card  category="mugs" img="https://i.pinimg.com/1200x/36/51/ee/3651eefd1112667c4623fe15cd0e27a4.jpg" price="15.00" name="Coffe Mug"/>
            <Card  category="mugs" img="https://i.pinimg.com/736x/5d/c2/95/5dc2959d4a3eb8a98c35d89b7f517fff.jpg" price="20.00" name="Have Tea"/>
            <Card category="tshirt" img="https://i.pinimg.com/1200x/73/c9/6e/73c96e744d759cdb1ef5fc545a74ec27.jpg" price="50.00" name="Black"/>
            <Card  category="tshirt" img="https://i.pinimg.com/736x/1c/3e/fb/1c3efbd19befe371b683f359a2e56244.jpg" price="70.00" name="Green"/>
            <Card category="mugs" img="https://i.pinimg.com/1200x/43/a9/4f/43a94fb4b38dc2188e9a2afac05ce613.jpg" price="25.00" name="Coffee Together"/>
            <Card category="mugs" img="https://i.pinimg.com/736x/af/3b/31/af3b311c6cf2851fe8c147537e3a6a61.jpg" price="30.00" name="Meow"/>
            <Card category="tshirt" img="https://i.pinimg.com/1200x/b1/df/c3/b1dfc3fa269ee511e58108f990230d54.jpg" price="100.00" name="Bayern"/>
            <Card category="tshirt" img="https://i.pinimg.com/1200x/5c/44/be/5c44becb6aea86b8cb4412cddce25cfd.jpg" price="70.00" name="Grey"/>
          </div>
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="h-[430px]  w-[300px] sm:w-[280px] md:w-[320px] lg:w-[320px]  mt-1">
        <img
          src={props.img}
          alt="product"
          className="p-3 h-[80%] w-full"
        />
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