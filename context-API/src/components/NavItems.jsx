import React from 'react'

const NavItems = (props) => {
  return (
    <div>
      <div className="menu-items">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <h3>{props.theme}</h3>
        </ul>
      </div>
    </div>
  )
}

export default NavItems
