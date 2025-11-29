import { useState, type FC } from "react";
import withTask from "./HOC/withPovider";
import {  type ComponentProps } from "./HOC/withPovider";


type addProps = {
    onClick: ()=>void
}

const  InputItem: FC<ComponentProps> = ({ task, setTask }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(  task.length > 0 ? task[task.length - 1].id + 1 : 1 );

  function handleSave() {
    if (!value) return;
    const newTask = [...task, { id:counter, title: value, completed: false }];
    setTask(newTask);
    console.log(task);
    setCounter(c=>c+1);
    setShow(false);
  }



  return (
    <>
      {show ? (
        <div className="w-[80%] flex flex-col items-start justify-around gap-5 border border-gray-200 rounded-md p-5 ">
          <h1 className="text-xl font-semibold">Create a todo</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-md h-10 w-[80%] sm:w-[60%]  lg:w-[30%] outline-0 focus:ring-2 focus:ring-yellow-500 pl-2"
            placeholder="Write something."
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-5">
            <button
              className="h-10 w-20 rounded-md text-white font-medium bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center focus:ring-2 focus:ring-yellow-500"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="h-10 w-20 rounded-md text-black font-medium border-2 border-black flex items-center justify-center focus:ring-2 focus:ring-yellow-500"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[80%]">
          <Add onClick={() => setShow(true)} />
        </div>
      )}
    </>
  );
}

function Add({ onClick } : addProps) {
  return (
    <>
      <button
        className="h-10 w-30 rounded-3xl bg-yellow-500 text-white self-start focus:ring-3 focus:ring-yellow-600 cursor-pointer"
        onClick={onClick}
      >
        + Add a Task
      </button>
    </>
  );
}
export default withTask(InputItem);
