import React from "react";

export default function ContactThird() {
  return (
    <div className="flex-cols-1 md:mt-5 md:flex md:justify-between p-10">
      <div className="font-bold text-xs">
        <ul>
          <li className="mb-5 text-sm">Popular Categories</li>
          <li>Gents</li>
          <li>Ladies</li>
          <li>Accessories & Tools</li>
        </ul>
      </div>

      <div className="font-bold text-xs">
        <ul>
          <li className=" text-sm mb-5"> Popular Services</li>
          <li>Hair Cut</li>
          <li>Hair Treatment</li>
          <li>Skin Care</li>
          <li>Skin Treatment</li>
          <li>Bridal</li>
        </ul>
      </div>

      <div className="font-bold text-xs">
        <ul>
          <li className="mb-5 text-sm">Corporate</li>
          <li>Hair Cut</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Customer Service</li>
          <li>Blog</li>
          <li>Terms & conditions</li>
        </ul>
      </div>

      <div className="font-bold text-xs">
        <ul>
          <li className="mb-5 text-sm">Connect</li>
          <li className="flex">
            <img
              className="h-8 w-8 mr-3"
              src={require("../Images/whatsapp.png")}
              alt="whatsapp_icon"
            />
            <img
              className="h-7 w-7 mr-3"
              src={require("../Images/facebook.png")}
              alt="fb_icon"
            />
            <img
              className="h-7 w-7 mr-3"
              src={require("../Images/instagram.png")}
              alt="instagram_icon"
            />
          </li>

          <li className="mt-5 mb-5 text-sm">Payment</li>
          <li>Payment logos here</li>
        </ul>
      </div>

      <div className="grid grid-cols-1">
        <h1 className="text-xl">Get special offers in your inbox!</h1>
        <input
          className="mt-3 p-3 h-10 w-72 md:w-96 rounded border border-black"
          placeholder="Email*"
          type="email"
        ></input>
        <input
          className="mt-3 p-3 h-10 w-72 md:w-96 rounded border border-black"
          placeholder="Name*"
          type="string"
        ></input>

        <div className="flex flex-cols-2 justify-between ">
          <ul className="text-xs">
            <li>By providing my e-mail address, I consent</li>
            <li>to receive marketing communications</li>
            <li>from instaurasalon.com and its affiliates.</li>
          </ul>
          <button className="bg-[#FF0000] text-white rounded p-1 h-10 md:p-2 m-1 mr-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
