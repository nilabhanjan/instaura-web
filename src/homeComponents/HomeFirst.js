import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

const HomeFirst = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className='invisible md:visible'>
      {/* <div className='flex flex-cols-1 z-20'>
        <h2>Your hair is our</h2>
        <h1>Canvas!</h1>
        <button>Book a Service</button>
      </div> */}
      <BsArrowLeftCircle className='left-arrow ' onClick={prevSlide} />
      <BsArrowRightCircle className='right-arrow' onClick={nextSlide} />
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
  );
};

export default HomeFirst;