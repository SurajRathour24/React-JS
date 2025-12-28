import React, { useState } from 'react'

const App = () => {
  
    const [users, updateUsers] = useState({user:'Dev', tech: 'JS', age:25});

    let btnClicked = () =>{
      // let newUsers = {...users};
      // console.log(newUsers);
      // newUsers.user = 'Avinash';
      // updateUsers(newUsers) 
      updateUsers(prev=> ({...users, age:26}))
    }
    
  return (
    <div>
      <h1>{users.user} is working in {users.tech} and age is {users.age}</h1>
 
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
