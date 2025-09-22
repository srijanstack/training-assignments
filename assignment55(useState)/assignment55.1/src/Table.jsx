import { useState } from "react";

export function Table(){
    const [num, setNum] = useState(2);
    
    return(
        <>
        <div className="h-80 w-50 items-center flex-col p-5" >
            <button className="h-12 w-30 bg-blue-400 border-2 rounded-md" onClick={()=>setNum(num+1)}>Next</button>  
            <Tablerow num={num}/>
        </div>
        </>
    );
}

function Tablerow({num}){
    return(
        <>
        <p className="text-2xl text-blue-600 mt-2">{num} X 1 = {num*1}</p>
        <p className="text-2xl text-blue-600 mt-2">{num} X 2 = {num*2}</p>
        <p className="text-2xl text-blue-600 mt-2">{num} X 3 = {num*3}</p>
        <p className="text-2xl text-blue-600 mt-2">{num} X 4 = {num*4}</p>
        </>
    );
}