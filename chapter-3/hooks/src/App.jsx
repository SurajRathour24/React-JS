import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10);

  const [value, setvalue] = useState(0)

  let increaseNum = () =>{
    setvalue(value+1);
  }
  let decreaseNum = () =>{
    if(value>0){
      setvalue(value-1);
    }
  }

  return (
    <div>
      
      <h1>{value}</h1>
      <div className="btn-wrapper">
      <button onClick={decreaseNum}>Decrease Num -</button>
      <button onClick={increaseNum}>Increase Num +</button>
      </div>

    </div>
  )
}

export default App
