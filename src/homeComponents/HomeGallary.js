import React from "react";

export default function HomeGallary({ pics }) {
  return (
    <div className="bg-black text-white text-center my-5 py-5">
      <h1 className="text-xl">GALLARY</h1>

      {/* gally pics mapped and grid view */}
      <div className="grid grid-cols-2 mx-10 md:mx-20 md:grid-cols-4 gap-4 m-5">
        {pics.map((pics) => (
          <img
            key={pics.name}
            src={pics.image}
            className=""
            alt="gallary_pics"
          />
        ))}
      </div>
      <button>VIEW ALL</button>
    </div>
  );
}
