import React from 'react'
import  HomeFirst  from '../homeComponents/HomeFirst'
import HomeGallary from '../homeComponents/HomeGallary';
import HomeBrands from '../homeComponents/HomeBrands';
import HomeSecond from '../homeComponents/HomeSecond';
import { SliderData,pics,brands, brands2, SliderData2 } from '../homeComponents/ImagesData';

import ImgSlider from '../homeComponents/ImgSlider';



export default function Home() {
  return (
    <>
    <HomeFirst SliderData={SliderData} />
    <HomeSecond/>
    <ImgSlider SliderData={SliderData2}  />
    <HomeGallary pics={pics}/>
    <HomeBrands brands={brands} brands2={brands2}/> 
    
    </>
  
  )
}
