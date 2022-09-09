import React from 'react';

import ImgSlider from './ImgSlider';

function HomeFirst ({SliderData})  {


  return (
    <div className=''>

      {/* text and book Service button */}
      <div className='grid justify-center mx-20 my-20 md:grid-cols-1 z-20 md:absolute lg:mx-48 lg:my-32 md:mx-32 md:my-20 '>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Your hair is our</h2>
        <h1 className='text-[#FF0000] text-4xl md:text-4xl lg:text-4xl font-semibold '>Canvas!</h1>
        <div className='p-3 mt-5 bg-black w-48 rounded text-center text-white'>Book a Service</div>
      </div>

      {/* image slider c */}
      <ImgSlider SliderData={SliderData}/>
    </div>
  );
};

export default HomeFirst;