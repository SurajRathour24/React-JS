import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-indigo-600">MyLogo</div>

          {/* Menu */}
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-indigo-600 cursor-pointer">
                {/* <a href="/">Home</a> */}
                <Link to='/'>Home</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
                <Link to='/about-us'>About Us</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
                <Link to='/blog'>Blog</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
                <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
