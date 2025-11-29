import { TaskContext } from "../../Contexts/Context";
import { useContext, type FC } from "react";

export type item = {
  title: string;
  completed: boolean;
  id: number;
};

export type ComponentProps = {
  task: item[];
  setTask: (v: item[]) => void;
};

const withTask = (IncomingComponent: FC<ComponentProps>): FC => {
  const OutGoingComponent: FC = () => {
    const contextValue = useContext(TaskContext); // { task, setTask }

    return <IncomingComponent {...contextValue} />;
  };

  return OutGoingComponent;
};
export default withTask;
