import Header from "../Components/Header";
import Todo from "../Components/Todo";
import DoneTask from "../Components/DoneTask";
import InputItem from "../Components/InputItem";
import ItemProvider from "../Provider/ItemProvider";

function Home() {
  return (
    <>
    <ItemProvider>
      <Header />
      <div className="h-auto py-10 w-full flex flex-col items-center justify-around gap-5">
        <Todo />
        <InputItem  />
        <DoneTask />
      </div>
    </ItemProvider>
    </>
  );
}

export default Home;
