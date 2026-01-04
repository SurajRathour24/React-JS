import React from 'react'
import NavItems from './NavItems'

const Navbar = (props) => {
  return (
    <div>
      <div className="nav">
        <h2>Coder</h2>
        <NavItems theme={props.theme} />
      </div>
    </div>
  )
}

export default Navbar
