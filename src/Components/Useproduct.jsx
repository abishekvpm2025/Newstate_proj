import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Smartphone", brand: "Samsung", description: "Latest model smartphone", price: 699, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
  { id: 2, name: "Laptop", brand: "Apple", description: "High performance laptop", price: 1200, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { id: 3, name: "Headphones", brand: "Sony", description: "Noise cancelling headphones", price: 199, image: "https://images.unsplash.com/photo-1580894732444-8ecdedc4e2b8?w=400" },
  { id: 4, name: "Smartwatch", brand: "Apple", description: "Track your fitness", price: 249, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400" },
  { id: 5, name: "Tablet", brand: "Samsung", description: "Lightweight tablet", price: 399, image: "https://images.unsplash.com/photo-1580910051074-d76694265947?w=400" },
  { id: 6, name: "Camera", brand: "Canon", description: "DSLR Camera for photography", price: 899, image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=400" },
  { id: 7, name: "Bluetooth Speaker", brand: "JBL", description: "Portable and powerful", price: 99, image: "https://images.unsplash.com/photo-1585386959984-a4155222d4b0?w=400" },
  { id: 8, name: "Gaming Console", brand: "Sony", description: "Next-gen gaming console", price: 499, image: "https://images.unsplash.com/photo-1606813902787-42c9a9a32efb?w=400" },
  { id: 9, name: "External Hard Drive", brand: "Seagate", description: "2TB storage", price: 120, image: "https://images.unsplash.com/photo-1618446885715-097a5cfbb5a1?w=400" },
  { id: 10, name: "Wireless Mouse", brand: "Logitech", description: "Ergonomic wireless mouse", price: 49, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400" },
];

const Useproduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brand, setBrand] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brand === "" || product.brand === brand;
    const matchesPrice =
      (minPrice === "" || product.price >= parseInt(minPrice)) &&
      (maxPrice === "" || product.price <= parseInt(maxPrice));
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="bg-yellow-400 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Electronics Shop</h1>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 p-3 rounded-lg border border-gray-300 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-28 p-3 rounded-lg border border-gray-300 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-28 p-3 rounded-lg border border-gray-300 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Brand Dropdown */}
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-40 p-3 rounded-lg border border-gray-300 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Sony">Sony</option>
          <option value="Canon">Canon</option>
          <option value="JBL">JBL</option>
          <option value="Seagate">Seagate</option>
          <option value="Logitech">Logitech</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-black">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow-md p-4 hover:scale-105 transform transition duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-black">{product.description}</p>
              <span className="block mt-2 font-bold text-black">${product.price}</span>
              <p className="text-xs text-gray-600">Brand: {product.brand}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Useproduct;
