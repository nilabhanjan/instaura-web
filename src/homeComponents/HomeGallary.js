import React from 'react'


export default function HomeGallary ({pics}) {
  return (
    <div className='bg-black text-white text-center my-5 py-5'> 
    <h1>GALLARY</h1>
    <div className='grid  grid-cols-2 md:grid-cols-4 gap-4 m-5'>
    {pics.map((pics) => (
          <img src={pics.image} className="" alt="gallary_pics" />
        ))}
    </div>
    <button>VIEW ALL</button>
    </div>
  )
}
