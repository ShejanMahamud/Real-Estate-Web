import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Picker from "../Utils/Picker";

const Banner = () => {
  return (
    <div className="w-full font-dmsans">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="bg-banner-1 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Beautiful homes made for you</h1>
            <p className="text-white opacity-60 w-[40%] mb-20">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-banner-2 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Beautiful homes made for you</h1>
            <p className="text-white opacity-60 w-[40%] mb-20">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-banner-3 bg-cover bg-no-repeat bg-center w-full h-[600px] flex  flex-col justify-center px-20">
            <h1 className="text-5xl font-bold text-white w-[60%] my-5">Beautiful homes made for you</h1>
            <p className="text-white opacity-60 w-[40%] mb-20">In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            <Picker/>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;
