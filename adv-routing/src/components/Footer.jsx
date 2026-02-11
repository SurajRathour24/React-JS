import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            MyBrand
          </h3>
          <p className="text-sm text-gray-400">
            Building modern web experiences with React & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-center md:items-end">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer
