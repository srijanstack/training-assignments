import Header from "./Components/Header";
import Todo from "./Components/Todo";
import InputItems from "./Components/InputItem";
import DoneTask from "./Components/DoneTask";
import { useEffect, useState } from "react";


function App() {
  const [item, setItem] = useState(()=>{
    const list = localStorage.getItem('my-todo-list');
    return list ? JSON.parse(list) : [];
  }); 
  console.log(item);
  
  useEffect(()=>{
    localStorage.setItem('my-todo-list', JSON.stringify(item));
  }, [item])

  const doingTask = item.filter(t=>!t.completed);
  const doneTask = item.filter(t=>t.completed);

  return (
    <>
      <Header />
      <div className="h-auto py-10 w-full flex flex-col items-center justify-around gap-5">
        <Todo doingTask={doingTask} setItem={setItem} item={item}/>
        <InputItems  item={item} setItem={setItem}/>
        <DoneTask doneTask={doneTask} setItem={setItem} item={item}/>
      </div>
    </>
  );
}

export default App;
