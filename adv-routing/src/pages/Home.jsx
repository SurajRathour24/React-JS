import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Build <span className="text-red-500">Home Page</span> Modern Websites Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn React and Tailwind CSS step by step and create clean,
            responsive web applications.
          </p>

          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
