import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Picker from "../Utils/Picker";

const Banner = () => {
  return (
    <div className="w-full font-dmsans relative z-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="bg-banner-1 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20 pt-10">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Beautiful homes made for you</h1>
            <p className="text-white opacity-60 w-[40%] mb-10">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
            {/* <div className="flex items-center justify-between w-full px-20 absolute -bottom-20">
        <div className="bg-transparent backdrop-blur-md rounded-2xl px-10 py-5 flex flex-col items-center gap-2 font-bold text-white text-lg">
            <div className="flex items-center *:-ml-4 *:w-12 *:h-12 *:object-cover *:rounded-full *:border-2 *:border-white">
                <img src="user.jpg" alt="user.png" />
                <img src="user-2.jpg" alt="user.png" />
                <img src="user-3.jpg" alt="user.png" />
                <img src="user-4.jpg" alt="user.png" />
                <img src="user-5.jpg" alt="user.png" />
                <div className="bg-white flex items-center justify-center font-bold text-gray-800 text-sm">
                    72K+
                </div>
            </div>
            <h1>Happy Customers</h1>
        </div>
    </div> */}
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-banner-2 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20 pt-10">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Beautiful apartment just waiting for you</h1>
            <p className="text-white opacity-60 w-[40%] mb-10">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-banner-3 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20 pt-10">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Find a perfect home you love</h1>
            <p className="text-white opacity-60 w-[40%] mb-10">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;
