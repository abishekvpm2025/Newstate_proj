import React, { useState } from "react";

// ---- Page 1: Counter ----
const Counter = () => {
  const [count, setCount] = useState(0);
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
    </div>
  );
};
export default Counter;
