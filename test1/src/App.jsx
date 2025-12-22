import React from 'react'
import Navbar from './components/header/navbar'
import Card from './components/Cards/card'

const App = () => {
  return (
    <div className='parent'>
      < Navbar />

      <div className="card-wrapper flex justify-between gap-x-2">
        < Card />
      </div>
    </div>
  )
}

export default App
