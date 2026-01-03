import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='about-us' element={< About />} /> 
        <Route path='product' element={ < Product /> } />
        <Route path='*' element={ < NotFound /> } ></Route>
      </Routes>
    </div>
  )
}

export default App