import React from "react";

export default function HomeSecond() {
  const roundPics = [
    {
      name: "Man",
      src: "./images/Round_1.png",
      text: "gents haircut styles",
      discount: "20%",
    },
    {
      name: "Woman",
      src: "./images/Round_2.png",
      text: "ladies haircut styles",
      discount: "30%",
    },
    {
      name: "Spa",
      src: "./images/Round_3.png",
      text: "spa services",
      discount: "25%",
    },
    {
      name: "Kid",
      src: "./images/Round_4.png",
      text: "kids haircut styles",
      discount: "30%",
    },
  ];
  return (
    <div className="mt-2 text-center mb-3 bg-slate-900 pt-8 text-white">
      <h1 className="font-semibold text-2xl mb-1">OFFER OF THE MONTH</h1>

      {/*discounts and round pics  mapped */}
      <div className="grid md:grid md:grid-cols-2 md:justify-center md:justify-items-center lg:flex justify-center">
        {roundPics.map(({ src, name, text, discount }) => (
          <div key={name} className="gap-3 m-8">
            <img 
            src={src} 
            className="h-64 w-64 p-4 align-middle " 
            alt={name} 
            />

            <div className="text-center">
              <h2 className="uppercase">{text}</h2>
              <button className="p-3 bg-[#FF0000] font-bold text-xl uppercase rounded w-48 mt-2 ">
                {discount} OFF
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
