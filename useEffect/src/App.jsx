import React, { useState } from 'react'
import { useEffect } from 'react';


const App = () => {

  const [num, setnum] = useState(10);
  const [num2, setnum2] = useState(100);

  useEffect(function (){
    console.log('Use Effect Running...')
  }, [num])

  return (
    <div>
      <h1>Use Effect Hook </h1>
      <h2>Value num is {num}</h2>
      <h2>Value of Num2 is {num2}</h2>
      <button onMouseEnter={() => {
        setnum(num + 1)
      }} 
      onMouseLeave={() => {
        setnum2(num2 + 10)
      }}
      > Click Me </button>      
    </div>
  )
}

export default App
