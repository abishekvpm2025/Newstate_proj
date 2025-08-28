import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Smartphone", description: "Latest model smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", description: "High performance laptop", price: "$1200", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", description: "Noise cancelling headphones", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", description: "Track your fitness", price: "$249", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tablet", description: "Lightweight tablet", price: "$399", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Camera", description: "DSLR Camera for photography", price: "$899", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Bluetooth Speaker", description: "Portable and powerful", price: "$99", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Gaming Console", description: "Next-gen gaming console", price: "$499", image: "https://via.placeholder.com/150" },
  { id: 9, name: "External Hard Drive", description: "2TB storage", price: "$120", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Wireless Mouse", description: "Ergonomic wireless mouse", price: "$49", image: "https://via.placeholder.com/150" },
];

const Useproduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Electronics Shop</h1>
      </header>

      {/* Search Bar */}
      <div className="text-center my-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-black">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transform transition duration-200">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-black">{product.description}</p>
              <span className="block mt-2 font-bold text-black">{product.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Useproduct;
