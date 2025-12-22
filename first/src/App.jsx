import React from "react";
import navbar from "./components/navbar/navbar";
import Banner from "./components/Banner/banner";
import Whychoose from "./components/whychoose/whychoose";
import Team from "./components/team/team";

const App = () => {
  return (
    <div>
      {navbar()}
      {Banner()}
      <Whychoose />
      <Team img='https://images.unsplash.com/photo-1633332755192-727a05c4013d' user='Aman Thakur' designation='Product Manager' location='Chandigarh' exp='11' />
    </div>
  );
};

export default App;
