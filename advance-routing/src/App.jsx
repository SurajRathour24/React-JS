import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Team from "./pages/Team";
import MemberDetail from "./pages/MemberDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-team" element={<Team />} />
        <Route path="/our-team/:id" element={ < MemberDetail /> } />
        <Route path="product" element={<Product />} >
            <Route path="men" element={ <Men /> } />
            <Route path="women" element={ <Women /> } />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
