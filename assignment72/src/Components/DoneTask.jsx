function DoneTask({ doneTask, setItem, item }) {
  function handledChange(i) {
    const updatedTask = item.map((task) =>
      task.id === i.id ? { ...task, completed: false } : task
    );
    setItem(updatedTask);
  }

  function handleDelete(id) {
    const deleted = item.filter((task) => task.id !== id);
    setItem(deleted);
  }

  return (
    <>
      <div className="flex flex-col items-start w-[80%] gap-4">
        <h1 className="text-xl font-medium mt-3">Things done</h1>
        <div className="flex flex-col ">
          {doneTask.length > 0 ? (
            doneTask.map((t) => (
              <li className="h-8  w-auto flex items-center gap-5" key={t.id}>
                <input
                  type="checkbox"
                  className="accent-yellow-500   focus:ring-yellow-600 h-5 w-5"
                  checked={t.completed}
                  onChange={() => handledChange(t)}
                />
                <span className="font-medium">{t.title}</span>
                <button
                  className="h-7 w-15 bg-red-500 text-white flex items-center justify-center  rounded-md cursor-pointer"
                  onClick={() => handleDelete(t.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <span className="text-md text-gray-500">No Todos here!</span>
          )}
        </div>
      </div>
    </>
  );
}
export default DoneTask;
