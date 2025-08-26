import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// ✅ all components from components folder
import Counter from "./Components/Counter.jsx";
import Lightswitch from "./Components/Lightswitch.jsx";
import Loginform from "./Components/Loginform.jsx";
import Questionpage from "./Components/Questionpage.jsx";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://picsum.photos/1600/900?blur=2')",
      }}
    >
      {/* Navbar */}
      <nav className="flex justify-center gap-6 bg-black/50 py-4">
        <Link to="/" className="hover:text-yellow-300 font-bold">
          Counter
        </Link>
        <Link to="/light" className="hover:text-yellow-300 font-bold">
          Light
        </Link>
        <Link to="/form" className="hover:text-yellow-300 font-bold">
          Login
        </Link>
        <Link to="/qa" className="hover:text-yellow-300 font-bold">
          Q&A
        </Link>
      </nav>

      {/* Pages */}
      <div className="flex justify-center items-center py-10">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/light" element={<Lightswitch />} />
          <Route path="/form" element={<Loginform />} />
          <Route path="/qa" element={<Questionpage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
