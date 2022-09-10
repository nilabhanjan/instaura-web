import React from "react";

export default function HomeBrands({ brands, brands2 }) {
  return (
    <div className="bg-white text-black text-center my-5 py-5">
      <h1 className="text-4xl mb-24 font-semibold">Our Partner Brands</h1>

      {/* 1st set of brands */}
      <div className="grid grid-cols-1 md:grid-cols-3   place-items-center gap-4 m-5 ">
        {brands.map(({ image, name }) => (
          <img 
          key={name} 
          src={image} 
          className="h-16" alt="gallary_pics" />
        ))}
      </div>

      {/* 2nd set of brands */}
      <div className="grid md:flex justify-center place-items-center ">
        {brands2.map(({ image, name }) => (
          <img
            key={name}
            src={image}
            className="h-16 md:h-24 m-10"
            alt="gallary_pics"
          />
        ))}
      </div>
    </div>
  );
}
