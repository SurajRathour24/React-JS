import React, { useState } from 'react'

const App = () => {

  const [initialVal, updatedValue] = useState(0)

  function increaseVal(){
    updatedValue(initialVal+1);
  }
  function decreaseNum(){
    if(initialVal > 0){
      updatedValue(initialVal-1); 
    } 
    else{
      console.log('Sorry value is less than 0')
    }
  }

  return (
    <div>
      <div className="val"><h1>{initialVal}</h1></div>
      <div className="button-box">
      <button onClick={decreaseNum}>Decrease Value - </button>
      <button onClick={increaseVal}>Increase Value +</button>
      </div>

    </div>
  )
}

export default App