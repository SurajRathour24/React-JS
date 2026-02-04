import React, { useState } from 'react'

const App = () => {


  let submitHandler = (e) =>{
    console.log("Form Submitted");
    e.preventDefault();
  }




  return (
    <div>
      <form action="" onSubmit={submitHandler}>

    <input type="text" placeholder='Enter Your Name' onChange={function(e){
      console.log(e.target.value);
      
    }} />
    <button> Submit Now </button>

      </form>
    </div>
  )
}

export default App
