import { useState } from "react";

const StateDemo = () => {
  // 1️⃣ Array
  const [items, setItems] = useState([1, 2, 3]);

  // 2️⃣ Object
  const [user, setUser] = useState({ name: "Abi", age: 22 });

  // 3️⃣ Array of Objects
  const [users, setUsers] = useState([
    { id: 1, name: "Abi" },
    { id: 2, name: "Ram" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React State Demo</h2>

      {/* 1️⃣ Array */}
      <p>Array Items: {items.join(", ")}</p>
      <button onClick={() => setItems([...items, items.length + 1])}>
        Add Item
      </button>

      <hr />

      {/* 2️⃣ Object */}
      <p>User: {user.name}, Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>

      <hr />

      {/* 3️⃣ Array of Objects */}
      <h3>Users:</h3>
      {users.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
      <button
        onClick={() =>
          setUsers([...users, { id: users.length + 1, name: "New User" }])
        }
      >
        Add New User
      </button>
    </div>
  );
};

export default StateDemo;
