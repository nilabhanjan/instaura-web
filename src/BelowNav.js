import React from "react";
import "./styles.css";

export default function BelowNav({ Links }) {
  return (
    <div className=" h-8 max-w-[1240] mx-auto px-8 text-black shadow-lg bg-white">

      <div className="belownav">
        <ul className="hidden md:flex ">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
              <a href={link.link}
                className="text-gray-900 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
