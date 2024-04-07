import React from 'react'

const Picker = () => {
  return (
    <div className="backdrop-blur-md bg-transparent text-white w-[80%] rounded-2xl grid grid-cols-[90%_10%] row-auto items-center gap-5">
    <div className="grid grid-cols-3 row-auto items-center gap-20 py-5 px-10 rounded-lg ">
    <div className="w-full *:mb-2">
    <h1 className="font-medium text-lg">Location</h1>
    <div className="flex items-center justify-between w-full">

<select id="countries" class="bg-transparent text-[#8F90A6] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none">
<option selected>Choose a country</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select>

    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
<path d="M13 7.66669C13 12.3334 7 16.3334 7 16.3334C7 16.3334 1 12.3334 1 7.66669C1 6.07539 1.63214 4.54926 2.75736 3.42405C3.88258 2.29883 5.4087 1.66669 7 1.66669C8.5913 1.66669 10.1174 2.29883 11.2426 3.42405C12.3679 4.54926 13 6.07539 13 7.66669Z" stroke="#8F90A6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.66669C8.10457 9.66669 9 8.77126 9 7.66669C9 6.56212 8.10457 5.66669 7 5.66669C5.89543 5.66669 5 6.56212 5 7.66669C5 8.77126 5.89543 9.66669 7 9.66669Z" stroke="#8F90A6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    
    </div>
    {/* <hr className=" bg-[#DCDCEB] h-[50px] w-[2px] rounded-full opacity-50"/> */}
    <div className="w-full *:mb-2">
    <h1 className="font-medium text-lg">Property Type</h1>
    <div className="flex items-center justify-between w-full">

<select id="countries" class="bg-transparent text-[#8F90A6] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none">
<option selected>Choose a Property</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select>

<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" stroke="#8F90A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    
    </div>
    {/* <hr className=" bg-[#DCDCEB] h-[50px] w-[2px] rounded-full opacity-50"/> */}
    <div className="w-full *:mb-2">
    <h1 className="font-medium text-lg">Price Range</h1>
    <div className="flex items-center justify-between w-full">

<select id="countries" class="bg-transparent text-[#8F90A6] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none">
<option selected>Choose a Range</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select>

<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path d="M1 1L7 7L13 1" stroke="#8F90A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    
    </div>
    </div>
    <button className="w-full">
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
<rect width="54" height="54" rx="15" fill="#1DAEFF"/>
<path d="M26.3684 34.2632C30.7286 34.2632 34.2632 30.7286 34.2632 26.3684C34.2632 22.0083 30.7286 18.4737 26.3684 18.4737C22.0083 18.4737 18.4737 22.0083 18.4737 26.3684C18.4737 30.7286 22.0083 34.2632 26.3684 34.2632Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.2369 36.2369L31.9441 31.9441" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
</div>
  )
}

export default Picker