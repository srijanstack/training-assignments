import withTask from "./HOC/withPovider";
import { useEffect, useState, type FC } from "react";
import { type item, type ComponentProps } from "./HOC/withPovider";


const Todo: FC<ComponentProps> = ({ setTask, task }) => {
    const [doingTask, setDoingTask] = useState<item[]>([]);

    useEffect(()=>{
        const tasks = task.filter((t: item)=>t.completed == false);
        setDoingTask(tasks);
    },[task])

  return (
    <>
      <div className="min-w-[80%] gap-4 h-auto flex flex-col grow items-start justify-around">
        <h1 className="text-4xl font-bold ">Things to get done</h1>
        <Todolist doingTask={doingTask} setItem={setTask} item={task} />
      </div>
    </>
  );
}

function Todolist({ doingTask, setItem, item } : any) {
  function handledChange( id:number) {
    const updatedTask = item.map((task: item ) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setItem(updatedTask);
  }

  return (
    <>
      <h1 className="text-xl font-medium mt-3">Things to do</h1>
      <div className="flex flex-col ">
        {doingTask.length>0 ? (
          doingTask.map((i:item) => (
            <li className="h-6  w-auto flex items-center gap-5" key={i.id}>
              <input
                type="checkbox"
                className="accent-yellow-500 focus:ring-yellow-600 h-5 w-5"
                checked={i.completed}
                onChange={() => handledChange(i.id)}
              />
              <span className="font-medium">{i.title}</span>
            </li>
          ))
        ) : (
          <span className="text-md text-gray-500">No Todos here!</span>
        )}
      </div>
    </>
  );
}
export default withTask(Todo);