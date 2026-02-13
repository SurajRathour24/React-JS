import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Innertemp from "./Templates/Innertemp";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} > 
          <Route path="men" element={<Innertemp />} />
          <Route path="women" element={<Innertemp />} />
        </Route>
        <Route path="*" element={<Notfound />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
