import React, { useState } from 'react'

const App = () => {

  let [num, setnum] = useState(10);


  return (
    <div>
      <h1>Test</h1>
      <h2>Value of num is {num}</h2>
      <button onClick={()=>{
        console.log(num);
        setnum(num+1);
        
      }}>Change Num</button>
    </div>
  )
}

export default App
