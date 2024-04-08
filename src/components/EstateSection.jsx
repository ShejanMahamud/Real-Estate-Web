import React from 'react';
import Estates from '../Utils/Estates';

const EstateSection = ({properties}) => {
  return (
    <div className='w-[90%] mx-auto my-20 font-dmsans'>
        <div className='flex items-center justify-between w-full'>
        <span className='text-gray-800 font-bold text-3xl'>Find your next place to live</span>
        <span className='text-[#1DAEFF] font-medium text-lg'>See All</span>
        </div>

        <div className='w-full grid grid-cols-3 row-auto items-stretch gap-10 mt-20'>
            {
                properties.map(property => <Estates key={property.id} property={property}/>)
            }
        </div>
    </div>
  )
}

export default EstateSection