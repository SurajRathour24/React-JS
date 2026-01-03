import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
        <div className="content-wrapper">
          <h1>Home</h1>
        </div>
      <Footer />
    </div>
  )
}

export default Home
