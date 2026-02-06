import React, { useState } from 'react'

const App = () => {

  const [input, setinput] = useState("")

  let submitHandler = (e) =>{
    console.log("Form Submitted");
    e.preventDefault();
  }




  return (
    <div>
      <form action="" onSubmit={submitHandler}>

    <input type="text" placeholder='Enter Your Name' value={input} onChange={function(e){
      // console.log(e.target.value);
      setinput(e.target.value);
      
    }} />
    <button> Submit Now </button>

      </form>
    </div>
  )
}

export default App
