import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-indigo-600">Brand</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden relative">
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden peer"
            />

            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <div className="absolute left-0 top-16 w-full bg-white shadow-md hidden peer-checked:block">
              <div className="flex flex-col space-y-4 p-4">
                <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
