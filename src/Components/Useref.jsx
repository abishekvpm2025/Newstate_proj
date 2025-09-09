import { useRef, useState } from "react";

const Useref = () => {
  console.log("component render");

  const refdata = useRef(null);

  const h1data = useRef(null);

  const buttonref = useRef(null);

const [butt,Setbutt]=useState("bg-black")

  const handlechange = () => {
    console.log("yesref render");

    console.log(refdata.current.value);

    h1data.current.textContent = refdata.current.value;

    const  arraypush =JSON.parse(localStorage.getItem("myarray")) || []
    console.log(myarray);
    

    arraypush.push(refdata.current.value)

    localStorage.setItem("myarray", JSON.stringify(arraypush));
  };

  const changecolor = () => {

    const inputvalue = buttonref.current.value.toLowerCase()
    Setbutt(inputvalue === "off" ? "bg-green-500":"bg-black")



    
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6  ">
      <div >
        <h1 className="border-2 bg-gray-300 text-black p-8 mb-2 h-15 w-90 rounded-2xl  " ref={h1data}></h1>
        <input
          type="text"
          placeholder="type somthing "
          ref={refdata}
          onChange={handlechange}
          className="border-2 bg-gray-300 text-black p-2 w-90 rounded-3xl"
        />
      </div>
      <div className="flex flex-col mt-10 items-center gap-5" >
        <input
          ref={buttonref}
          type="text"
          placeholder="type somthing "
          onChange={changecolor}
          className=" border-2 bg-gray-300 text-black p-2 "
        />
        <button className={`h-20 w-20 rounded-4xl border-3 ${butt}`} >submit </button>
      </div>
      </div>
    </>
  );
};
export default Useref;
