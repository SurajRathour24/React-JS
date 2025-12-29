import React from "react";

localStorage.setItem("User", "Developer");

const App = () => {
  // localStorage.clear();
  // localStorage.setItem('user', 'Suraj');

  const user = {
    Name: "Suraj",
    Age: 25,
    City: "Delhi",
  };

  localStorage.setItem("user", JSON.stringify(user));

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  return (
    <div>
      <h1>LocalStorage</h1>
    </div>
  );
};

export default App;
