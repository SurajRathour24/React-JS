import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, updateTitle] = useState('')

  let formHandler = (e) =>{
    console.log('Submitted Form by', title);
    e.preventDefault();
    updateTitle('');
  }
  return (
    <div className=''>
      <div className="form-wrapper">
        <form onSubmit={(e) =>{
          formHandler(e);
        }}>
          <input type="text" value={title} placeholder='Enter Your Name...' onChange={(elems) =>{
            updateTitle(elems.target.value)

          }} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App