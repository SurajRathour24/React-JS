import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
        <div class="text-center max-w-xl">
          <h1 class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg">
            404
          </h1>

          <h2 class="text-3xl font-bold text-white mt-6">Page Not Found</h2>

          <p class="text-gray-400 mt-4">
            Oops! The page you are looking for doesn’t exist or has been moved.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/"> Go Home </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
