import React, { useContext } from 'react'
import NavItems from './NavItems'
import { ThemeData } from '../context/ThemeContext'

const Navbar = (props) => {
  
  let data = useContext(ThemeData);
  console.log(data);
  

  return (
    <div>
      <div className="nav">
        <h2>{data}</h2>
        <NavItems theme={props.theme} />
      </div>
    </div>
  )
}

export default Navbar
