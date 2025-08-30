import React, { useEffect, useState } from "react";

const Empname = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data.users);
        setFiltered(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = debounce((text) => {
    setSearch(text);
    setFiltered(
      users.filter((u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, 500);

  if (loading) return <p className="p-6 text-lg font-semibold text-black">Loading users...</p>;
  if (error) return <p className="p-6 text-lg font-semibold text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto text-black">
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search user by name..."
        onChange={(e) => handleSearch(e.target.value)}
        className="border border-gray-300 p-3 mb-6 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-black"
      />

      {/* 3 Select Boxes */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="flex-1 border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
          {filtered.map((u) => (
            <option key={u.id} className="text-black">
              {u.firstName} {u.lastName}
            </option>
          ))}
        </select>
        <select className="flex-1 border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
          {filtered.map((u) => (
            <option key={u.id} className="text-black">{u.username}</option>
          ))}
        </select>
        <select className="flex-1 border border-gray-300 p-3 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
          {filtered.map((u) => (
            <option key={u.id} className="text-black">{u.email}</option>
          ))}
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden text-black">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, index) => (
              <tr
                key={u.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 text-black`}
              >
                <td className="p-3 border-t">{u.firstName} {u.lastName}</td>
                <td className="p-3 border-t">{u.username}</td>
                <td className="p-3 border-t">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export default Empname;
