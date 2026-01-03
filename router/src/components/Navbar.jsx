import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">LOGO</div>
        <div className="nav-items">
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link>Services</Link> </li>
                <li> <Link>Blog</Link> </li>
                <li> <Link to='/contact'>Contact</Link> </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
