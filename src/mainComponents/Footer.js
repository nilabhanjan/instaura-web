import React from "react";

export default function Footer() {
  const payment = [
    { name: "PAYTM", src: "./images/paytm.png" },
    { name: "VISA", src: "./images/visa.png" },
    { name: "MASTERCARD", src: "./images/mastercard.png" },
    { name: "COD", src: "./images/cod.png" },
  ];
  return (
    <div>
      <div className="flex-cols-1 md:grid md:grid-cols-3 lg:mt-5 lg:flex lg:justify-between p-10">
        {/* Popular Categories list */}
        <div className="font-bold text-xs">
          <ul>
            <li className=" mb-5 text-sm">Popular Categories</li>
            <li>Gents</li>
            <li>Ladies</li>
            <li>Accessories & Tools</li>
          </ul>
        </div>

        {/* Popular services list */}
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

        {/* corporate list */}
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

        {/* small logos div */}
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

            {/* payment logos mapped */}
            <li className="mt-5 mb-5 text-sm">Payment</li>
            <li className="flex gap-2">
              {payment.map((payment) => (
                <img
                  key={payment.name}
                  src={payment.src}
                  className="h-7 w-7"
                  alt={payment.name}
                />
              ))}
            </li>
          </ul>
        </div>

        {/* newsletter div */}
        <div className="grid grid-cols-1">
          <h1 className="text-xl mt-5 md:mt-0">
            Get special offers in your inbox!
          </h1>
          <input
            className="mt-3 p-3 h-10 md:w-96 rounded border border-black"
            placeholder="Email*"
            type="email"
          ></input>

          {/* name is redundent, it should be removed */}
          <input
            className="mt-3 p-3 h-10  md:w-96 rounded border border-black"
            placeholder="Name*"
            type="string"
          ></input>

          <div className="flex flex-cols-2  ">
            <ul className="text-xs">
              <li>By providing my e-mail address, I consent</li>
              <li>to receive marketing communications</li>
              <li>from instaurasalon.com and its affiliates.</li>
            </ul>

            <button className="bg-[#FF0000] text-white ml-5 rounded h-10 p-2  mt-2 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className=" flex p-4 static bottom-0 justify-center max-w-[1240] mx-auto px-8
     text-white shadow-lg bg-black "
      >
        ©2022 Instaura unisex hair and beauty spa salon , Inc. All Rights
        Reserved
      </div>
    </div>
  );
}
