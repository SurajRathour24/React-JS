import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="main-nav-wrapper flex justify-between items-center py-3 px-14 mx-auto bg-amber-800">
        <div className="logo">LOGOO</div>
        <div className="menu">
            <nav>
                <ul className='flex gap-5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
