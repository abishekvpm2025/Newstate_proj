import { useEffect, useState } from "react";

const Useeffect = () => {

    console.log("component runig");
    

    const [count,SetCount]=useState(0)

    useEffect(()=> {
        console.log("use effect running");

        const time = setInterval(()=>{
            console.log("set interval run");
            
            SetCount((previus)=> previus+1)
        },1000)

        return () =>
            
             clearInterval(time)





    })


    return (

        <>
        <div>
            <h1>   Use Effect Running   </h1>
            <h3>Count : {count} </h3>
        </div>
        
        
        
        </>




    )




}
export default Useeffect;