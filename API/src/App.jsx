import React from 'react'

const App = () => {

  const getdata = async () =>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log(data.json());
    const respData = await data.json();
    console.log(respData);
  }
 

  return (
    <div>
      <h1>API</h1>
      <button onClick={getdata}>Get Data</button>
    </div>
  )
}

export default App
