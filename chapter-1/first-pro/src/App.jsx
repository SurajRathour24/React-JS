import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='h-screen flex justify-center align-middle items-center'>
      {Cards()}
    </div>
  )
}

export default App
