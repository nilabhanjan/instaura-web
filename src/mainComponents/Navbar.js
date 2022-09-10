import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ sections, links }) {
  const [nav, setNav] = useState(false);

  //   for closing and opening of slide menu on mobile
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center justify-between h-18 max-w-[1240] mx-auto px-8 text-white shadow-lg bg-black ">
      {/* image for navbar */}
      <Link to="/">
        <img className="logo" 
        src="./images/logo.png" 
        alt="logo " />
      </Link>

      {/* menu for navbar mapped */}
      <ul className="hidden md:flex text-white">
        {sections.map((link) => (
          <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* menu button and cross button on mobile view */}

      <div onClick={handleNav} className=" flex md:hidden z-10 ">
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
            ? "fixed right-0 top-12 w-[60%] border-r border-r-gray-900 bg-black h-full ease-in-out duration-1000 md:hidden"
            : "fixed right-[-100%] top-12 h-full duration-1000"
        }
      >
        {/*1st nav bar  mobile menu list mapped */}
        <ul className="text-xs p-3 uppercase ">
          {sections.map((link) => (
            <li key={link.name} className="p-4 border-b border-red-500">
              <Link to={link.link} className="text-white-900 ">
                {link.name}
              </Link>
            </li>
          ))}

          {/*2nd nav bar  mobile menu list mapped */}

          {links.map((link) => (
            <li key={link.name} className="p-4 border-b border-red-500  ">
              <Link to={link.link} className="text-white-900 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* a close button on mobile menu itself */}
        <AiOutlineClose
          className="m-5"
          onClick={handleNav}
          size={20}
        ></AiOutlineClose>
      </div>
    </div>
  );
}
