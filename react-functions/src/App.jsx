import React from 'react'

const App = () => {
  function showUser(){
    let user = document.querySelector('span');
    user.innerText = 'Developer';
  }
function onScrolling(){
  // console.log('User scrolling the page');
}
  
 
  return (
    <div>
      {/* <h1>Hey <span>User</span></h1>
      <button onClick={showUser}>Show User</button><br/>
      <input onChange={function onUserInput(elems){
    console.log('User is typing...', elems.target.value);

    
  }} type="text" name="" id="" placeholder='Enter your name ...' /> */}

        <div className="userScrolling" onMouseEnter={function(elems){
          console.log('User is scrolling');
          onScrolling(elems)
        }}>

        </div>

    </div>
  )
}

export default App
