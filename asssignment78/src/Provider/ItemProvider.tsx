import { useState, type ReactNode, type FC, useEffect } from "react";
import { TaskContext } from "../Contexts/Context";
import { type item } from "../Components/HOC/withPovider";

type ProviderProps = {
    children: ReactNode;
}

const ItemProvider: FC<ProviderProps>= ({children}) =>{
    const [task, setTask] = useState<item[]>(()=>{
    const list = localStorage.getItem('my-todo-list');
    return list ? JSON.parse(list) : [];
  });
    
  useEffect(()=>{   localStorage.setItem('my-todo-list', JSON.stringify(task));},[task])

    return(<>
        <TaskContext.Provider value={{task, setTask}}>
            {children}
        </TaskContext.Provider>
    </>)
}

export default ItemProvider;