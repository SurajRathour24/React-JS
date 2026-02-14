import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Classic Sneakers",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1518444028785-8b3f9c6d3f4b",
    },
    {
      id: 5,
      name: "Backpack",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 6,
      name: "Sunglasses",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      price: "₹1,199",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: "₹2,299",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    }
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.price}</p>

                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Product;
