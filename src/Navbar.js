import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [nav, setNav] = useState(false);

//   items object for navbar
  let sections = [
    { name: "CONTACT", link: "/contact" },
    { name: "SIGN IN", link: "/" },
    { name: "OUR LOCATION", link: "/" },
  ];

  //   for closing and opening of slide menu on mobile
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center justify-between first-letter:h-18 max-w-[1240] mx-auto px-8 text-white shadow-lg bg-black">
      {/* image for navbar */}
      <Link to="/">
        <img className="logo " src={require('../src/Images/logo.png')} alt="logo " />
      </Link>

      {/* menu for navbar */}
      <ul className="hidden md:flex ">
        {sections.map((link) => (
          <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
            <Link to={link.link} className="text-white-900 hover:text-red-500 ">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* menu button and cross button on mobile view */}

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
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-black h-full ease-in-out duration-1000 md:hidden"
            : "fixed left-[-100%] top-0 h-full duration-1000"
        }
      >
        {/* logo for mobile view */}
        <div className="flex items-center justify-center">
          <Link to="/">
            <img className="logo" src={require('../src/Images/logo.png')} alt="logo" />
          </Link>
        </div>
        {/* mobile menu list */}
        <ul className="p-3 uppercase ">
          {sections.map((link) => (
            <li key={link.name} className="p-4 border-b border-red-500">
              <Link to={link.link} className="text-white-900 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
