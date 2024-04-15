import React from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";

const Feature = ({text}) => {
  return (
    <div className='flex items-center gap-2'>
              <IoCheckmarkOutline className='text-[#1daeff] text-xl font-bold'/>
                <span className='text-[#484848]'>{text}</span>
              </div>
  )
}

export default Feature