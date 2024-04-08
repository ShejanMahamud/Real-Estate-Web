import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Login = () => {
  return (
    <div className="w-full grid grid-cols-2 row-auto items-center gap-10 font-dmsans">
      <div className="w-full bg-[#1daeff] min-h-screen bg-[url('shape.png')] bg-no-repeat bg-cover bg-center pt-10 flex items-center justify-center">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="loginSwiper"
        >
          <SwiperSlide>
            <div className="w-[50%] mx-auto">
              <img
                src="login-1.jpg"
                alt="login.jpg"
                className="w-full mb-3"
                style={{ borderRadius: "50px 50px 10px 50px" }}
              />
              <h1 className="text-center text-white font-bold text-2xl mb-5">
                Find Your Perfect Place With Homeey
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[50%] mx-auto h-full">
              <img
                src="login-1.jpg"
                alt="login.jpg"
                className="w-full h-full mb-3"
                style={{ borderRadius: "50px 50px 10px 50px" }}
              />
              <h1 className="text-center text-white font-bold text-2xl">
                Find Your Perfect Place With Homeey
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[50%] mx-auto">
              <img
                src="login-1.jpg"
                alt="login.jpg"
                className="w-full mb-3"
                style={{ borderRadius: "50px 50px 10px 50px" }}
              />
              <h1 className="text-center text-white font-bold text-2xl">
                Find Your Perfect Place With Homeey
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="bg-[#1252ae1f] rounded-full w-20 mx-auto p-3 border border-[#1252ae26] mb-5">
          <img src="logo.png" alt="logo.png" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to JohuHousing</h1>
        {/* <p className="text-[#737D8C] text-center w-[60%] mx-auto text-sm mb-3">Welcome back! login with your data that you entered 
during registration.</p> */}
<p className="font-medium text-[#737D8C]">Not Registered? <span className="text-gray-800"> Register Here</span></p>
<form className="flex flex-col items-center justify-center w-full my-10 gap-5">

<label className="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow w-full" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow w-full" value="password" />
</label>
<button className="w-[60%] mx-auto bg-[#1daeff] px-10 py-2 rounded-md text-white font-bold">LOGIN</button>
</form>
      </div>
    </div>
  );
};

export default Login;
