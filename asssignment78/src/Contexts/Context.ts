import { createContext } from "react";
import { type item } from "../Components/HOC/withPovider";

type TaskContextType = {
  task: item[];
  setTask: (v: item[]) => void;
};

export const TaskContext = createContext<TaskContextType>({
  task: [],
  setTask: () => {},
});
