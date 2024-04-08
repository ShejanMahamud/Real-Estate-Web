import React from 'react';
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className='w-[90%] mx-auto flex flex-col items-center justify-center font-dmsans mt-16'>
        <h1 className='text-[#808080] text-lg font-bold mb-10'>Trusted by 100+ Companies across the globe! </h1>

        
            <Marquee pauseOnHover='true'>
            <div className='flex items-center gap-16 *:w-32 *:grayscale *:opacity-50'>
                <img src="google.png" alt="google.png" />
                <img src="logitech.png" alt="logitech.png" />
                <img src="netflix.png" alt="netflix.png" />
                <img src="samsung.png" alt="samsung.png" />
                <img src="spotify.png" alt="spotify.png" />
                <img src="amazon.png" alt="amazon.png" />
            </div>
            </Marquee>
        
    </div>
  )
}

export default Companies