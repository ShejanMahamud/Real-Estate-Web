import "leaflet/dist/leaflet.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoIosSwap } from "react-icons/io";
import { IoPrintOutline } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { DataContext } from "../Root";
import Feature from "../Utils/Feature";

const EstateDetails = () => {

  const mapRef = useRef(null);

  const { propertyId } = useParams();

  const [singleProperty, setSingleProperty] = useState({});

  const { properties } = useContext(DataContext);

  useEffect(() => {
    const matchedProperty = properties.find(
      (property) => property.id === parseInt(propertyId)
    );
    if (matchedProperty) {
      setSingleProperty(matchedProperty);
    }
  }, []);
  

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    id,
    detailed_location
  } = singleProperty;

  const position = [33.9173011, -118.41618589047789];

  return (
   <div className="w-full my-20 font-dmsans">
    <div className="w-[90%] mx-auto flex items-center justify-between">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold text-[#484848] mb-2">
          {estate_title}
        </h1>
        <p>{location}</p>
      </div>
      <div className="flex items-center w-full gap-20 justify-end">
        <h1 className="text-2xl font-bold text-[#484848]">{price}</h1>
        <div className="flex items-center gap-3 text-2xl font-bold text-[#484848]">
          <IoIosSwap />
          <CiHeart />
          <CiShare2 />
          <IoPrintOutline />
        </div>
      </div>
    </div>
    <div className="w-[90%] mx-auto grid grid-cols-[70%_30%] row-auto items-start gap-5 mt-10">
      <img
        src={image}
        alt="image-1.jpg"
        className="w-full rounded-md h-[500px] object-cover"
      />
      <div className="w-full grid grid-cols-2 row-auto items-center gap-5 *:w-full *:rounded-md">
        <img src="https://i.ibb.co/z5GK6Mt/2.jpg" alt="image.png" />
        <img src="https://i.ibb.co/gtHq94B/3.jpg" alt="image.png" />
        <img src="https://i.ibb.co/7N57CwJ/4.jpg" alt="image.png" />
        <img src="https://i.ibb.co/7vFktcZ/5.jpg" alt="image.png" />
        <img src="https://i.ibb.co/PgdYGDW/6.jpg" alt="image.png" />
        <img src="https://i.ibb.co/kqhXdqv/7.jpg" alt="image.png" />
      </div>
    </div>
    <div className="w-full bg-[#F7F7F7] py-20 px-10 grid grid-cols-[70%_30%] row-auto items-stretch gap-x-5 gap-y-10">
      <div className="w-full mx-auto bg-white py-20 px-10 rounded-md shadow-lg flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-4 py-2 rounded-lg bg-[#F7F7F7] text-[#484848] font-medium text-base">
            {segment_name}
          </span>
          {facilities &&
            facilities.map((facility, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg bg-[#F7F7F7] text-[#484848] font-medium text-base"
              >
                {facility}
              </span>
            ))}
        </div>
        <div className="w-full">
          <h1 className="text-xl text-[#484848] font-semibold">
            Description
          </h1>
          <p className="text-lg my-3">{description}</p>
          <hr className="border border-[484848] w-full my-10" />
          <div className="w-full">
            <h1 className="text-xl text-[#484848] font-semibold mb-3">
              Property Details
            </h1>
            <div className="w-full grid grid-cols-3 row-auto items-center gap-x-10 gap-y-5">
              <span>
                Property ID: <span className="font-semibold">{id}</span>
              </span>
              <span>
                Price: <span className="font-semibold">{price}</span>
              </span>
              <span>
                Property Size: <span className="font-semibold">{area}</span>
              </span>
              <span>
                Property Type:
                <span className="font-semibold">{segment_name}</span>
              </span>
              <span>
                Property Status:
                <span className="font-semibold">{status}</span>
              </span>
              <span>
                Location: <span className="font-semibold">{location}</span>
              </span>
              <span>
                Facilities:
                {facilities &&
                  facilities.map((facility, index) => (
                    <span key={index} className="font-semibold">
                      {facility}
                    </span>
                  ))}
              </span>
            </div>
          </div>
          <hr className="border border-[484848] w-full my-10" />
          <div className="w-full">
            <h1 className="text-xl text-[#484848] font-semibold mb-3">
              Additional Details
            </h1>
            <div className="w-full grid grid-cols-3 row-auto items-center gap-x-10 gap-y-5">
              <span>
                Deposit: <span className="font-semibold">20%</span>
              </span>
              <span>
                Pool Size: <span className="font-semibold">300 sqft</span>
              </span>
              <span>
                Year Built: <span className="font-semibold">2016-01-09</span>
              </span>
              <span>
                Equipment: <span className="font-semibold">Grill - Gas</span>
              </span>
              <span>
                Additional Rooms:{" "}
                <span className="font-semibold">Guest Bath</span>
              </span>
              <span>
                Amenities: <span className="font-semibold">Clubhouse</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full bg-white rounded-md px-5 py-5 shadow-md">
          <h1 className="text-xl text-[#484848] font-semibold">Features</h1>
          <div className="w-full grid grid-cols-2 row-auto items-center gap-x-5 gap-y-3 my-5">
            <Feature text={"Air Conditioning"} />
            <Feature text={"Lawn"} />
            <Feature text={"Swimming Pool"} />
            <Feature text={"Barbeque"} />
            <Feature text={"Microwave"} />
            <Feature text={"TV Cable"} />
            <Feature text={"Dryer"} />
            <Feature text={"Outdoor Shower"} />
            <Feature text={"Washer"} />
            <Feature text={"Gym"} />
            <Feature text={"Refrigerator"} />
            <Feature text={"WiFi"} />
            <Feature text={"Laundry"} />
            <Feature text={"Sauna"} />
            <Feature text={"Window Coverings"} />
          </div>
        </div>
        <div className="w-full bg-white rounded-md px-5 py-5 shadow-md my-5">
          <h1 className="text-xl text-[#484848] font-semibold">
            Recently Viewed
          </h1>
          <div className="w-full grid grid-cols-1 row-auto items-center gap-y-5 my-5">
            <div className="flex items-center gap-5">
              <img
                src="https://i.ibb.co/D5b1RFg/home-2.jpg"
                alt="image.png"
                className="w-36 rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-[#484848] font-bold hover:text-[#1daeff]">
                  Luxurious Townhouse
                </h1>
                <p className="text-[#1daeff] font-medium">$800,000</p>
                <p className="text-[#484848]">New York City, NY</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="https://i.ibb.co/rd6RZf9/home-9.jpg"
                alt="image.png"
                className="w-36 rounded-md"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-[#484848] font-bold hover:text-[#1daeff]">
                  Beachfront Vacation Villa
                </h1>
                <p className="text-[#1daeff] font-medium">$1,000/night</p>
                <p className="text-[#484848]">Hawaii, HI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-md px-5 py-5 shadow-md">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl text-[#484848] font-semibold">Location</h1>
          <span>{detailed_location}</span>
        </div>
        <div className="w-full mx-auto my-5 h-[500px]">
            <MapContainer
            center={position}
            ref={mapRef}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EstateDetails;
