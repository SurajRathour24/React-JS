import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { useNavigate } from "react-router";

const Navbar = () => {


  let navigate = useNavigate()



  return (
    <div>
      <div className="nav-wrapper flex justify-between items-center bg-gray-900">
        <div className="container flex justify-between items-center mx-auto">
          <Logo />
          <Menu />
        </div>
      </div>
      <div className="bg-gray-700 flex justify-center align-middle gap-12 py-5">
        <button
        onClick={() =>{
          navigate(-1)
        }}
        className="bg-amber-600 text-white px-5 py-2 text-md rounded active:scale-75">
          Back
        </button>
        <button
        onClick={() => {
          navigate(+1)
        }}
        className="bg-amber-600 text-white px-5 py-2 text-md rounded active:scale-75">
          Next
        </button>
        <button
        onClick={() =>{
         navigate('/')
        }}
        className="bg-orange-800 rounded-2xl text-black active:scale-90 ms-20 px-5 py-2">
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default Navbar;
