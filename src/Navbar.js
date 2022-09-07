import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../src/Images/logo.png";
import "./styles.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center justify-between first-letter:h-18 max-w-[1240] mx-auto px-8 text-white shadow-lg bg-black">
      
        <img className="logo " src={logo} alt="logo " />

          <ul className="hidden md:flex ">
            <li className="p-4">CONTACT</li>
            <li className="p-4">SIGN IN</li>
            <li className="p-4">OUR LOCATION</li>
          </ul>

          {/* menu button and cross button */}
          
          <div onClick={handleNav} className=" flex md:hidden ">
            {nav ? (
              <AiOutlineClose size={20}></AiOutlineClose>
            ) : (
              <AiOutlineMenu size={20}></AiOutlineMenu>
            )}
          </div>
        
      

      {/* mobile menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-gray-600 h-full ease-in-out duration-1000 md:hidden"
            : "fixed left-[-100%] top-0 h-full duration-1000"
        }
      >
        {/* <div>
          <img className=".logo" src={logo} alt="logo" />
        </div> */}

        <ul className="p-3 uppercase">
          <li className="p-4 border-b border-gray-200">CONTACT</li>
          <li className="p-4 border-b border-gray-200">SIGN IN</li>
          <li className="p-4 border-b border-gray-200">OUR LOCATION</li>
        </ul>
      </div>
    </div>
  );
}
