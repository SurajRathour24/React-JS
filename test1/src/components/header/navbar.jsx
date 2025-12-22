import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex place-content-between px-20 py-5 bg-black">
        <div className="logo"><h2 className='text-amber-200'>LOGO</h2></div>
        <div id="header-menu">
            <ul className='flex [&>li]:text-white [&>li>a]:flex [&>li>a]:px-4'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="button">
            <button className='bg-amber-500 px-5 py-2 rounded-md'>Click Me</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
