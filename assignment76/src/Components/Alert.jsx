import { useEffect } from "react";
import {withAlert} from "./HOC/WithPorvider";


const alertType = {
  "Success!": {
    color: "  bg-green-100  border-green-400 text-green-700 ",
    cross: " text-green-500 ",
  },
  "Error!": {
    color: " bg-red-100 border border-red-400 text-red-700 ",
    cross: " text-red-500 ",
  },
};

function Alert({ alert, removeAlert }) {
  if (!alert) return;
  useEffect(() => {
    if (alert) {
      const timerId = setTimeout(removeAlert, 3 * 1000);
      return () => clearTimeout(timerId);
    }
  }, [alert]);

  const { type, message } = alert;
  const { color, cross } = alertType[type];

  return (
    <>
      <div
        className={" px-4 py-3 rounded relative flex bg-blue-400 " + color}
        role="alert"
      >
        <strong className="font-bold">{type}</strong>
        <span className="block sm:inline">{message}</span>
        <span className="pl-1">
          <svg
            className={"fill-current h-6 w-6 cursor-pointer " + cross}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={removeAlert}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </>
  );
}

export default withAlert(Alert);
