import React, { useState } from 'react';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';

function ImgSlider ({SliderData})  {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // functions for next and prev image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // checking if the Array is array and is not empty
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className=''>

     

      {/* image carosul, hidden on small screens */}
      <div className='hidden md:flex'>
      <BsArrowBarLeft className=' text-red-600 absolute text-3xl mt-48  ml-10 first-letter: z-10 ' onClick={prevSlide} />
      <BsArrowBarRight className='text-red-600  absolute text-3xl mt-48 mr-10 z-10 right-0 '  onClick={nextSlide} />

      {/* mapping the carosul images */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="banners" className='' />
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ImgSlider;