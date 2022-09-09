import React from "react";

export default function HomeSecond() {
  const roundPics = [
    { name: "Man", src: "./images/Round_1.png", text: "gents haircut styles",discount:"20%" },
    { name: "Woman", src: "./images/Round_2.png",text: "ladies haircut styles",discount:"30%"  },
    { name: "Spa", src: "./images/Round_3.png",text: "spa services",discount:"25%"  },
    { name: "Kid", src: "./images/Round_4.png",text: "kids haircut styles",discount:"30%"  },
  ];
  return (
    <div className="mt-10 grid md:flex justify-center mb-3">
     
        {roundPics.map(({ src, name,text,discount }) => (
          <div className="grid grid-cols-1 justify-center gap-3">
            <img src={src} className="h-64 p-4 " alt={name} />
            <div className="text-center">
              <h2 className="uppercase">{text}</h2>
              <button className="p-3 bg-[#FF0000] text-white font-bold text-xl uppercase rounded w-48 mt-2 " >{discount} OFF</button>
            </div>
          </div>
        ))}
      
    
    </div>
  );
}
