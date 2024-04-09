import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { FaBath, FaBed, FaBookOpen, FaTree } from "react-icons/fa";
import { GiBarbecue, GiFireplace } from 'react-icons/gi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { MdFitnessCenter, MdPool, MdRestaurant } from 'react-icons/md';

const Estates = ({ property }) => {

    const facilityIcons = {
        "4 Bedrooms": <FaBed />,
        "3 Bedrooms": <FaBed />,
        "3 Bathrooms": <FaBath />,
        "2 Bathrooms": <FaBath />,
        "Backyard": <FaTree />,
        "Rooftop Terrace": <HiOutlineLocationMarker />,
        "Modern Kitchen": <MdPool />,
        "Fitness Center": <MdFitnessCenter />,
        "Balcony": <HiOutlineLocationMarker />,
        "Parking": <HiOutlineLocationMarker />,
        "Study Areas": <FaBookOpen />,
        "Community Events": <HiOutlineLocationMarker />,
        "Laundry Facilities": <HiOutlineLocationMarker />,
        "Swimming Pool": <MdPool />,
        "Restaurant": <MdRestaurant />,
        "Private Patio": <HiOutlineLocationMarker />,
        "Fireplace": <GiFireplace />,
        "BBQ Grill": <GiBarbecue />,
        "High-end Finishes": <HiOutlineLocationMarker />,
        "City Views": <HiOutlineLocationMarker />,
        "Gym": <MdFitnessCenter />,
        "Infinity Pool": <MdPool />,
        "Private Beach Access": <HiOutlineLocationMarker />,
        "Outdoor Lounge": <HiOutlineLocationMarker />,
      };

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = property;

    return (
        <div className='w-full px-5 py-5 border border-[#DCDCEB] rounded-xl flex flex-col justify-between' data-aos="fade-up">
            <div className='h-[200px] bg-no-repeat bg-cover bg-center rounded-xl flex justify-between items-start w-full px-5 py-5' style={{ backgroundImage: `url(${image})` }}>
                <div className='bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white'><IoLocationSharp /><h1>{location}</h1></div>
                <div className='bg-transparent backdrop-blur-sm rounded-md inline-flex items-center gap-1 px-3 py-2 border border-white border-opacity-30 text-xs text-white'><HiMiniCubeTransparent className='text-lg' /><h1>{status}</h1></div>
            </div>
            <h1 className='text-xl font-bold text-gray-800 my-3'>{estate_title}</h1>
            <p className='text-[#808080] font-medium mb-3'>{description}</p>
            <div className='w-full flex  flex-row flex-wrap font-bold gap-x-8 gap-y-3 text-sm mb-3 text-[#737D8C]'>
                {facilities.map(facility => (
                    <div key={facility} className='flex items-center gap-1'>
                        {facilityIcons[facility]}
                        <span>{facility}</span>
                    </div>
                ))}
            </div>
            {/* <div className='w-full flex items-center justify-between text-[#808080] font-medium mb-5'>
                <span>{segment_name}</span>
                <span>{area}</span>
            </div> */}
            <hr className='w-full border border-[#DDE0E5] my-5 border-opacity-50'/>
            <div className='w-full flex items-center justify-between'>
                <span className='text-[#1DAEFF] font-bold uppercase px-3 py-2 rounded-md'>{price}</span>
                <button className='bg-[#EBEEF2] text-gray-800 font-bold text-sm uppercase px-4 py-2 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default Estates;
