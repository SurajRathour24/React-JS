import React from 'react'
import navbar from './components/navbar/navbar'
import Banner from './components/Banner/banner'
import whychoose from './components/whychoose/whychoose'

const App = () => {
  return (
    <div>
   
      { navbar() }
         { Banner() }
         { whychoose() }
    </div>
  )
}

export default App
