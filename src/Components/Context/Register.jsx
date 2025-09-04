import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mycontext from "./Mycontext";

const Register = () => {
  const [name, setName] = useState("");
  const { register } = useContext(Mycontext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(name);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-100 w-100 bg-gradient-to-r from-green-400 to-teal-500">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
        <input
          placeholder="Enter your name"
          className="border-2 border-black p-2 mb-2 rounded-2xl w-60 text-black "
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
