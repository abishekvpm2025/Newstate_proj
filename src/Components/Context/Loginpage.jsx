import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mycontext from "./Mycontext";

const Loginpage = () => {
  const [name, Setname] = useState("");
  const { login } = useContext(Mycontext);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    login(name);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handlelogin}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>

        {/* Input */}
        <input
          placeholder="Enter your name"
          className="border p-2 w-full rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => Setname(e.target.value)}
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          🔑 Login
        </button>

        {/* Link to Register */}
        <p className="mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
