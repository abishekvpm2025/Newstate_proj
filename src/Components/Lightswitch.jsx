import React, { useState } from "react";  // ✅ Import useState

const LightSwitch = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Light Switch</h1>

      {/* Light bulb circle */}
      <div
        className={`w-32 h-32 rounded-full border-4 transition-all duration-300 ${
          on
            ? "bg-yellow-400 border-yellow-500 shadow-lg shadow-yellow-300"
            : "bg-gray-400 border-gray-600"
        }`}
      ></div>

      {/* Toggle button */}
      <button
        onClick={() => setOn(!on)}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        {on ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default LightSwitch;
