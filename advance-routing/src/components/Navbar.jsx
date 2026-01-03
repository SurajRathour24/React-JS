import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div>
      <div className="nav-wrapper flex justify-between items-center bg-gray-900">

        <div className="container flex justify-between items-center mx-auto">
                  <Logo />
          <Menu />
        </div>

      </div>
    </div>
  )
}

export default Navbar
