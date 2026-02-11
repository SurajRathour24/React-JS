import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link to='/'>MyBrand</Link>
          
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-indigo-600 cursor-pointer">
              <Link to='/'>Home</Link>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
              <Link to='/about-us'>About Us</Link>
            </li>
            {/* Product with Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-indigo-600">
                <Link to='/product' >Products</Link>
              </span>

              {/* Sub Menu */}
              <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-600">
                  <Link to='/products/men'>Men</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-indigo-600">
                  
                <Link to='/products/women'>Women</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
    </div>
  )
}

export default Navbar
