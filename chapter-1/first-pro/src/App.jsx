import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="main-body-wrapper">
      < Navbar />
      <div className="h-screen flex gap-3 justify-center align-middle items-center">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default App;
