import React from "react";
import { Link } from "react-router-dom";


const Notfound = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Background Gradient Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-30 top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px] opacity-30 bottom-[-100px] right-[-100px]"></div>

        {/* Glass Card */}
        <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 text-center max-w-2xl w-full mx-4">
          {/* 404 Big Text */}
          <h1 className="text-[100px] md:text-[160px] font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text leading-none">
            404
          </h1>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-300 mt-4 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back to safety.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105 transition duration-300"
            >
              Back To Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
