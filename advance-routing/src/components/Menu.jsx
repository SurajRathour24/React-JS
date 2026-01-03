import React from "react";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div>
      <div className="nav-wrapper py-5">
        <ul className="hidden md:flex space-x-6 [&>li>a]:hover:text-emerald-300">
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='about-us'> About Us </Link>
          </li>
          <li>
            <Link to='/product'> Product </Link>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
