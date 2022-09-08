import React from "react";

export default function HomeSecond() {
  const roundPics = [
    { name: "Man", src: "./images/Round_1.png" },
    { name: "Woman", src: "./images/Round_2.png" },
    { name: "Spa", src: "./images/Round_3.png" },
    { name: "Kid", src: "./images/Round_4.png" },
  ];
  return (
    <div className="mt-10">
      <div className="grid gap-4 grid-cols-1 md:flex md:flex-cols-4 justify-center">
        {roundPics.map(({ src, name }) => (
          <div className="grid grid-cols-1 gap-10 m-5 items-center">
            <img src={src} className="h-64 p-4 " alt={name} />
            <div className="">
              <h2 className="uppercase"> Gents Hair cut</h2>
              <div className="bg-red-500 p-2 md-rounded w-20">gg</div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}
