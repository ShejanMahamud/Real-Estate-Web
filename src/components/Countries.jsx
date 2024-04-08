import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";

const Countries = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='w-[90%] mx-auto my-20 font-dmsans'>
        <h1 className='text-gray-700 text-4xl text-center font-bold w-[40%] mx-auto'>We are available in many
well-known countries</h1>
<div className='w-[90%] mx-auto grid grid-cols-4 row-auto items-center gap-10 mt-20 text-white'>
    <div className="bg-[url('https://i.ibb.co/Jys06FY/america.webp')] rounded-3xl bg-no-repeat bg-cover h-[350px] bg-center text-center py-5 font-bold uppercase tracking-wider" data-aos="zoom-in">
        <div className='bg-transparent backdrop-blur-sm rounded-xl inline-flex items-center gap-1 px-5 py-2 border border-white border-opacity-30 text-base'><IoLocationSharp className='text-white'/><h1>America</h1></div>
    </div>
    <div className="bg-[url('https://i.ibb.co/KjLmDvs/spain.webp')] rounded-3xl bg-no-repeat bg-cover h-[350px] bg-center text-center py-5 font-bold text-xl uppercase tracking-wider" data-aos="zoom-in">
    <div className='bg-transparent backdrop-blur-sm rounded-xl inline-flex items-center gap-1 px-5 py-2 border border-white border-opacity-30 text-base'><IoLocationSharp className='text-white'/><h1>Spain</h1></div>
    </div>
    <div className="bg-[url('https://i.ibb.co/CnKRbw6/paris.webp')] rounded-3xl bg-no-repeat bg-cover h-[350px] bg-center text-center py-5 font-bold text-xl uppercase tracking-wider" data-aos="zoom-in">
    <div className='bg-transparent backdrop-blur-sm rounded-xl inline-flex items-center gap-1 px-5 py-2 border border-white border-opacity-30 text-base'><IoLocationSharp className='text-white'/><h1>Paris</h1></div>
    </div>
    <div className="bg-[url('https://i.ibb.co/D9ZQNvH/london.webp')] rounded-3xl bg-no-repeat bg-cover h-[350px] bg-center text-center py-5 font-bold text-xl uppercase tracking-wider" data-aos="zoom-in">
    <div className='bg-transparent backdrop-blur-sm rounded-xl inline-flex items-center gap-1 px-5 py-2 border border-white border-opacity-30 text-base'><IoLocationSharp className='text-white'/><h1>London</h1></div>
    </div>
</div>
    </div>
  )
}

export default Countries