import React from "react";
import { Routes, Route, Link } from "react-router-dom";


import Counter from "./Components/Counter.jsx";
import Lightswitch from "./Components/Lightswitch.jsx";
import Loginform from "./Components/Loginform.jsx";
import Questionpage from "./Components/Questionpage.jsx";
import Useeffect from "./Components/Useeffect.jsx";
import Useproduct from "./Components/Useproduct.jsx";
import Empname from "./Components/Empname.jsx";
import Form from "./Components/Form.jsx";
import StateDemo from "./Components/StateDemo.jsx";
import Useref from "./Components/Useref.jsx";
import Mycontext from "./Components/Context/Mycontext.jsx";
import Myprovider from "./Components/Context/Myprovider.jsx";
import Loginpage from "./Components/Context/Loginpage.jsx";
import Register from "./Components/Context/Register.jsx";
import Dashboard from "./Components/Context/Dashboard.jsx";
import Usemimo from "./Components/Usemimo.jsx";
import AppUseCallback from "./Components/Usemimo.jsx";


const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white bg-blue-500"
      
    >
      {/* { Navbar } */}
      <nav className="flex justify-center gap-6 bg-black/50 py-4">
         <Link to="/" className="hover:text-yellow-300 font-bold">
          Counter
        </Link>
        <Link to="/light" className="hover:text-yellow-300 font-bold">
          Light
        </Link>
        <Link to="/formdata" className="hover:text-yellow-300 font-bold">
          Login
        </Link>
        <Link to="/qa" className="hover:text-yellow-300 font-bold">
          Q&A
        </Link>
        <Link to="useeff" className="hover:text-yellow-300 font-bold" >
        Use Effect
        </Link>
        <Link to="product" className="hover:text-yellow-300 font-bold" >
        Products
        </Link>
        <Link to="empdata" className="hover:text-yellow-300 font-bold" >
        Users
        </Link>

        <Link to="form" className="hover:text-yellow-300 font-bold" >
        form
        </Link>
        <Link to="demo" className="hover:text-yellow-300 font-bold" >
        Demo
        </Link>
        <Link to="useref" className="hover:text-yellow-300 font-bold" >
        useref
        </Link>
        <Link to="memo" className="hover:text-yellow-300 font-bold" >
        mimo
        </Link> 
        {/* <Link to="register" className="hover:text-yellow-300 font-bold" >
        register
        </Link>
        <Link to="dashboard" className="hover:text-yellow-300 font-bold" >
        dashboard
        </Link>
        <Link to="/" className="hover:text-yellow-300 font-bold" >
        Login        </Link> */}

       
       


        
      </nav>

      {/* Pages */}
      <div className="flex justify-center items-center py-10">
          <Myprovider>

        <Routes>
          <Route path="/" element={ <Counter /> } />
          <Route path="/light" element={<Lightswitch />} />
          <Route path="/formdata" element={<Loginform />} />
          <Route path="/qa" element={<Questionpage />} />
          <Route path="useeff" element={< Useeffect />}/>
           <Route path="product" element={< Useproduct />}/>
           <Route path="empdata" element={< Empname />}/>
           <Route path="form" element={< Form />}/>
           <Route path="demo" element={< StateDemo />}/>
           <Route path="useref" element={< Useref />}/> 
           <Route path="memo" element={< Usemimo/>}/> 

           
            {/* <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
           
          


        </Routes>
        </Myprovider>
      </div>
    </div>
  );
};

export default App;
