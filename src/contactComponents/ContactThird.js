import React from "react";

export default function ContactThird() {

  // payment logos object, unalbe to map the images
  const payment = [
    { name: "PAYTM", src: "./images/paytm.png" },
    { name: "VISA", src: "./images/visa.png" },
    { name: "MASTERCARD", src: "./images/mastercard.png" },
    { name: "COD", src: "./images/cod.png" },
  ];
  return (
    <div className="flex-cols-1 md:mt-5 md:flex md:justify-between p-10">
      <div className="font-bold text-xs">
        <ul>
          <li className=" mb-5 text-sm">Popular Categories</li>
          <li>Gents</li>
          <li>Ladies</li>
          <li>Accessories & Tools</li>
        </ul>
      </div>

      <div className="font-bold text-xs">
        <ul>
          <li className=" text-sm mt-5 md:mt-0 mb-5"> Popular Services</li>
          <li>Hair Cut</li>
          <li>Hair Treatment</li>
          <li>Skin Care</li>
          <li>Skin Treatment</li>
          <li>Bridal</li>
        </ul>
      </div>

      <div className="font-bold text-xs">
        <ul>
          <li className="mb-5 mt-5 md:mt-0 text-sm">Corporate</li>
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
          {/* Connect and social logos */}
          <li className="mb-5 mt-5 md:mt-0 text-sm">Connect</li>
          <li className="flex">
            <img
              className="h-8 w-8 mr-3"
              src="./images/whatsapp.png"
              alt="whatsapp_icon"
            />
            <img
              className="h-7 w-7 mr-3"
              src="./images/facebook.png"
              alt="fb_icon"
            />
            <img
              className="h-7 w-7 mr-3"
              src="./images/instagram.png"
              alt="instagram_icon"
            />
          </li>


          {/* payment logos */}
          <li className="mt-5 mb-5 text-sm">Payment</li>
          <li className="flex gap-2" >
            
          {payment.map((payment) => (
          <img src={payment.src} className="h-7 w-7" alt={payment.name} />
        ))}
           
          </li>
        </ul>
      </div>


      <div className="grid grid-cols-1">
        <h1 className="text-xl mt-5 md:mt-0">Get special offers in your inbox!</h1>
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
          <button className="bg-[#FF0000] text-white rounded h-10 p-2 mr-8 mt-2 md:p-2 md:m-1 md:mr-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
