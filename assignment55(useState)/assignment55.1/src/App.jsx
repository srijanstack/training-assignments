import { Table } from "./Table.jsx"
import { useState } from "react";

function App() {
  let table1 = 'table1';
  let table2 = 'table2';
  const [flip, setFlip] = useState(false);

  if(flip){
    table1 = 'table2';
    table2 = 'table1';
  }

  return (
    <>
    < div className="flex">
      <Table key={table1}/>
      <Table key={table2}/>
      
    </div>
    <button className="h-12 w-30 bg-red-400 border-2 rounded-md ml-5" onClick={()=>setFlip(!flip)}>Flip</button>
    </>
  );
}

export default App
