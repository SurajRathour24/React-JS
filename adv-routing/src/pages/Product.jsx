import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <section className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/500"
                alt="Product"
                className="rounded-xl w-full max-w-md object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Premium Headphones
              </h1>

              <p className="text-gray-600 text-lg">
                Experience high-quality sound with noise cancellation and long
                battery life. Perfect for travel, work, and gaming.
              </p>

              <div className="text-2xl font-semibold text-indigo-600">
                ₹4,999
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <button className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
                <span className="text-lg">1</span>
                <button className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
                <button className="w-full sm:w-auto px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </section>
    </div>



  );
};
export default Product;
