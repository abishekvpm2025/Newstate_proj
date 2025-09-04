import React, { useState } from "react";
import { useContext } from "react";
import Mycontext from "./Context/Mycontext";

// ---- Page 1: Counter ----
const Counter = () => {
  const [count, setCount] = useState(0);

  const {data,Setdata} = useContext(Mycontext)

  console.log("component render");
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Counter Page</h1>
      <p className="text-xl">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        COUNT
      </button>
      <h1>{data}</h1>
      <button onClick={()=>{Setdata("this is updated context")}}> context button</button>
    </div>
  );
};
export default Counter;
