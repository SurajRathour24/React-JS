import React from 'react'
import axios from 'axios'

const App = () => {

  // const getdata = async () =>{
  //   let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   // console.log(data.json());
  //   const respData = await data.json();
  //   console.log(respData);
  // }


 const fetchData = async () =>{
  
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response);
  
  
 }

  return (
    <div>
      {/* <h1>API</h1>
      <button onClick={getdata}>Get Data</button> */}

        <button onClick={fetchData}>Get Data</button>


    </div>
  )
}

export default App
