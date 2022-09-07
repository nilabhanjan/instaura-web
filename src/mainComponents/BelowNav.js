import React from "react";


export default function BelowNav({ Links }) {
  return (
    <div className="hidden md:grid h-8 max-w-[1240] mx-auto px-8 py-1 text-black shadow-lg bg-gray-200">

      <div className="flex items-center justify-center">

        {/* below navbar menu list */}
        <ul className="flex ">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
              <a href={link.link}
                className="text-gray-900 hover:text-red-400 ">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
