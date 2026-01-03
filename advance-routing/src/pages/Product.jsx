import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
             {/* <h1>Product</h1> */}
      < Navbar />
      <div className="wrapper">
             <div className="sub-menu flex justify-center gap-10">
                <Link to='/product/men'>Men</Link>
                <Link to='/product/women'>Women</Link>
             </div>

      </div>

      {/* <div className="content">
        <h1>Product Page</h1>
      </div> */}
   
        < Footer />

        <Outlet />
    </div>
  )
}

export default Product
