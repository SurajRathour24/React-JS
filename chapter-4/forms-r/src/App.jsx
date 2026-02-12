import React, { useState } from 'react'

const App = () => {

  const [val, setval] = useState("")

  let submitHandler = (e) =>{
    console.log("Form Submitted by", val);
    e.preventDefault();
    setval("");
  }




  return (
    <div>
      <form action="" onSubmit={submitHandler}>

    <input type="text" placeholder='Enter Your Name' value={val} onChange={function(e){
      console.log(e.target.value);
      setval(e.target.value);
      
    }} />
    <button> Submit Now </button>

      </form>
<br/>
<div className='center-div'>
      <p>Form Submitted By <span>{val}</span> </p>
</div>
    </div>
  )
}

export default App
