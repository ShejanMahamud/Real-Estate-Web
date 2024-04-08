import React from 'react';
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";

const Estates = ({property}) => {

const {estate_title,segment_name,description,price,status,area,location,facilities,image} = property;

  return (
    <div className='w-full  px-5 py-5 border border-[#DCDCEB] rounded-xl flex flex-col justify-between'>
                <div  className='h-[200px] bg-no-repeat bg-cover bg-center rounded-xl flex justify-between items-start w-full px-5 py-5' style={{ backgroundImage: `url(${image})` }}>
                <div className='bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white'><IoLocationSharp/><h1>{location}</h1></div>
                <div className='bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white'><HiMiniCubeTransparent className='text-lg'/><h1>{status}</h1></div>
                </div>
                <h1 className='text-xl font-bold text-gray-800 my-3'>{estate_title}</h1>
                <p className='text-[#808080] font-medium mb-3'>{description}</p>
                {/* <div className='w-full flex items-center justify-between font-bold gap-3 text-sm mb-3'>
                    {
                        facilities.map(facility => <span>{facility}</span>)
                    }

                </div> */}
                <div className='w-full flex items-center justify-between text-[#808080] font-medium mb-5'>
                    <span>{segment_name}</span>
                    <span>{area}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <span className='bg-[#1DAEFF] text-white font-medium uppercase px-3 py-2 rounded-md'>{price}</span>
                    <button className='bg-[#1DAEFF] text-white font-medium uppercase px-3 py-2 rounded-md'>View Details</button>
                </div>
            </div>
  )
}

export default Estates