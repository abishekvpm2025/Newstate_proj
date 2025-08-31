// import { useState } from "react";

import { useState } from "react";

// const Form = () => {
//   const [data, SetDate] = useState({ name: "", email: "", Phone: "" });
//   console.log();
  

//   const datchange = (e) => {
//     const { name,value } = e.target;

//     SetDate((prev) => ({ ...prev, [name]: value }));
//   };

//   const datasubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("dataarea",JSON.stringify(data))
//     alert(`hi ${data.name },your datas is saved   `)


//   };

//   return (
//     <>
//       <h1>Register form</h1>
//       <form onSubmit={datasubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           onChange={datchange}
//           value={data.name}
//         />
//         <input
//           type="email"
//           placeholder="Enter mail"
//           name="email"
//           onChange={datchange}
//           value={data.email}
//         />
//         <input
//           type="email"
//           placeholder="Enter phone no"
//           name="Phone"
//           onChange={datchange}
//           value={data.Phone}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };
// export default Form;






const Task = () => {

    const[data,SetData]=useState({name:"",email:"",phone:""})

    const handlechange = (e) => {

        const {name,value}=e.target

        SetData( (prv)=>({
            ...prv,[name]:value})
        )

    } 

    const submitdata = (e) => {

        e.preventDefault()

        localStorage.setItem("mydata",JSON.stringify(data))

        alert(` hi ${data.name} ,your data successfully saved`)


    } 



    return (
    <>
    <h1>For datas</h1>
    <form onSubmit={submitdata} >
    <input type="text" name="name" value={data.name} placeholder="enter name" onChange={handlechange} />
   <input type="email" name="email" value={data.email} placeholder="enter mail" onChange={handlechange} />
   <input type="number" name="phone" value={data.phone} placeholder="enter phone no" onChange={handlechange} />
   <button type="submit"> submit</button>
   </form>

   </>
    )
}
export default Task;