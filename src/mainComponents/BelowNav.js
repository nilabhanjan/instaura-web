import React from "react";
import { Link } from "react-router-dom";


export default function BelowNav({ links }) {
  return (
    <div className="hidden md:grid h-8 max-w-[1240] mx-auto px-8 py-1 text-black shadow-lg bg-gray-200">

      <div className="flex items-center justify-center">

        {/* below navbar menu list mapped*/}
        <ul className="flex ">
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
              <Link to={link.link}
                className="text-gray-900 hover:text-red-400 ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
