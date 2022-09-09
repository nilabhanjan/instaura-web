import React from "react";

export default function ContactSecond() {
  let openDays = [
    { day: "MON", timing: "10:00 AM - 08:00 PM" },
    { day: "TUE", timing: "10:00 AM - 08:00 PM" },
    { day: "WED", timing: "10:00 AM - 08:00 PM" },
    { day: "THU", timing: "10:00 AM - 08:00 PM" },
    { day: "FRI", timing: "10:00 AM - 08:00 PM" },
    { day: "SAT", timing: "10:00 AM - 08:00 PM" },
    { day: "SUN", timing: "10:00 AM - 08:00 PM" },
  ];
  return (
    <div className=" flex-cols-1 md:mt-5 md:flex-cols-1 md:justify-between lg:flex p-10 bg-gray-100 ">
      <div className="flex flex-col flex-cols-1 justify-between ">
        {/* ADDRESS div */}
        <div className="mt-5">
          <h1 className="text-[#FF0000] font-bold text-xl mb-2">ADDRESS</h1>
          <ul>
            <li>1st Floor, Lakhimandir Complex</li>
            <li>Beltola Tiniali</li>
            <li>Guwahati, Assam 781028</li>
            <li>India</li>
          </ul>
        </div>

        {/* CALL div */}
        <div className="mt-5">
          <h1 className="text-[#FF0000] font-bold text-xl mb-4">CALL</h1>
          <p className="text-lg">060039 81831</p>
        </div>

        {/* fb insta div */}
        <div className="mt-5">
          <ul>
            <li className="flex items-center ">
              <img
                className="h-5 w-5 mr-3"
                src="./images/facebook.png"
                alt="fb_icon"
              />
              Facebook
            </li>
            <li className="flex items-center ">
              <img
                className="h-5 w-5 mr-3"
                src="images/instagram.png"
                alt="insta_icon"
              />
              Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* BUISNESS HOURS div */}
      <div className="mt-5">
        <h1 className="text-[#FF0000] font-bold text-xl ml-1">BUISNESS HOURS</h1>

        <div className="grid grid-rows-1">
          <ul className="">
            {openDays.map((data) => (
              <li key={data.day}>
                <div className="flex flex-cols-2 m-1">
                  <div className="bg-black text-white p-2 w-20 text-center">
                    {data.day}
                  </div>
                  <div className="bg-[#FF0000] text-white p-2">{data.timing}</div>
                </div>
              </li>
            ))}
          </ul>

        </div>

        {/* Another Option */}

        {/* <div className="grid grid-cols-1 mt-10">
          <div className="bg-black text-white p-2  text-center">
            MONDAY TO SUNDAY
          </div>
          <div className="bg-[#FF0000] font-bold text-lg text-center p-2">
            10:00 AM - 8:00 PM
          </div>
        </div> */}

      </div>

      {/* query div */}
      <div className="mt-5">
        <h1 className="text-[#FF0000] font-bold text-xl">SEND QUERY</h1>
        <div className="grid grid-cols-1">
          <input
            className="mt-2 p-3 h-10 w-72 md:w-96 rounded border border-black"
            placeholder="Name*"
            type="string"
          ></input>
          <input
            className="mt-2 p-3 h-10 w-72 md:w-96 rounded border border-black"
            placeholder="Email*"
            type="email"
          ></input>
          <input
            className="mt-2 p-3 h-10 w-72 md:w-96 rounded border border-black"
            placeholder="Contact*"
            type="string"
          ></input>
          <textarea
            className="mt-2 p-3 h-20 w-72 md:w-96 rounded border border-black"
            placeholder="Query*"
            type="string"
          ></textarea>
        </div>
        <button className="bg-[#FF0000] text-white py-3 px-3 mt-6 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
