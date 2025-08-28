import React, { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${form.name}!`);
  };

  return (
    <div className="flex flex-col items-center gap-4   justify-center">
      <h1 className="text-2xl font-bold">Login Form</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-72  bg-white p-6 rounded-xl shadow-lg"
      >
        <h3 className="text-black font-semibold">Name</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-l font-bold"
          
        />

        <h3 className="text-black font-semibold">Email</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-l font-bold text-black"
          
        />

        <h3 className="text-black font-semibold" >Phone Number</h3>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  font-bold text-black"
        
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
