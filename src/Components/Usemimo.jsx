import React, { useMemo, useState } from "react";

function slowfuction(num) {
  for (let i = 0; i <=10000; i++) {
    console.log("loop running:", i);
  }
  return num * 2;
}

export default function Usemimo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doublenumber = useMemo(()=>{
    return slowfuction(number);

  },[number])
  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h1>without useMemo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>color change</button>
      <p>{doublenumber}</p>
    </div>
  );
}
