import { useContext } from "react";
import Mycontext from "./Mycontext";

const Dashboard = () => {
  const { user, logout } = useContext(Mycontext);

  return (
    <div className="flex justify-center items-center h-100 w-100 bg-gradient-to-r from-pink-400 to-red-500">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
        {user ? (
          <>
            <p className="text-lg mb-4 text-gray-700">Welcome, {user.name}! 🎉</p>
            <button
              onClick={logout}
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-600">Please login first</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
