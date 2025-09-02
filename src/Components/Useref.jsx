import { useEffect, useRef } from "react";

const Useref = () => {
  console.log("component render");

  const refdata = useRef(null);

  const h1data = useRef(null);

  const buttonref = useRef(null);

  const butt = useRef(null);

  const handlechange = () => {
    console.log("yesref render");

    console.log(refdata.current.value);

    h1data.current.textContent = refdata.current.value;

    const  arraypush =JSON.parse(localStorage.getItem("myarray")) || []

    arraypush.push(refdata)

    localStorage.setItem(["mydata", JSON.stringify(arraypush)]);
  };

  const changecolor = () => {
    const inputvalue = buttonref.current.value;

    if (inputvalue.toLowerCase() === "off") {
      butt.current.style.backgroundColor = "green";
    } else {
      butt.current.style.backgroundColor = "";
    }
  };

  return (
    <>
      <div>
        <h1 ref={h1data}></h1>
        <input
          type="text"
          placeholder="type somthing "
          ref={refdata}
          onChange={handlechange}
        />
      </div>
      <div>
        <input
          ref={buttonref}
          type="text"
          placeholder="type somthing "
          onChange={changecolor}
        />
        <button className="bg-gray-900" ref={butt}>Touch </button>
      </div>
    </>
  );
};
export default Useref;
