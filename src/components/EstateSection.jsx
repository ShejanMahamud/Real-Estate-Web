import React, { useContext } from 'react';
import { AppContext } from '../AppDataProvider/AppDataProvider';
import Estates from '../Utils/Estates';

const EstateSection = () => {
  const { filteredProperties, rentProperties, sellProperties, seeAllProperties } = useContext(AppContext);

  return (
    <div className='w-[90%] mx-auto my-20 font-dmsans'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='text-[#1DAEFF] font-medium'>CHECKOUT OUR NEW</h1>
          <span className='text-gray-800 font-bold text-3xl'>Latest Listed Properties</span>
          <p className='text-[#737D8C] w-[60%]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
        </div>
        <div className='flex items-center gap-5'>
          <button onClick={seeAllProperties} className='text-[#1DAEFF] focus:bg-[#1DAEFF] focus:text-white border border-[#1DAEFF] rounded-full px-5 py-2 font-medium text-sm'>See All</button>
          <button onClick={rentProperties} className='text-[#1DAEFF] focus:bg-[#1DAEFF] focus:text-white border border-[#1DAEFF] rounded-full px-5 py-2 font-medium text-sm'>Rent</button>
          <button onClick={sellProperties} className='text-[#1DAEFF] focus:bg-[#1DAEFF] focus:text-white border border-[#1DAEFF] rounded-full px-5 py-2 font-medium text-sm'>Sell</button>
        </div>
      </div>

      <div className='w-full grid grid-cols-3 row-auto items-stretch gap-10 mt-20'>
        {
          filteredProperties.map(property => <Estates key={property.id} property={property}/>)
        }
      </div>
    </div>
  );
}

export default EstateSection;
