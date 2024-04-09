import React, { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { FaGithubAlt } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from './AuthProvider';
import auth from './config/firebase.config';

const SignIn = () => {

const navigate = useNavigate();
const [show, setShow] = useState(false);

const {emailPassLogin,googleLogin,githubLogin} = useContext(AuthContext);

const handleEmailPassLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  emailPassLogin(auth,email,password)
  .then(res => {
    toast.success('Sucessfully logged in!')
    e.target.reset();
  })
  .catch(error =>{
    toast.error('Something went wrong!')
  })
}

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res=>{
            toast.success('Google Login Successfully!')
        })
        .catch(error => {
            toast.error('Something went wrong!')
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(res=>{
            toast.success('GitHub Login Successfully!')
        })
        .catch(error => {
            toast.error('Something went wrong!')
        })
    }

  return (
    <div className="w-full grid grid-cols-2 row-auto items-center gap-10 font-dmsans border-t border-b border-[#CDD6E1]">
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
              Find Your Perfect Cottage With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto h-[325px]">
            <img
              src="login-2.jpg"
              alt="login.jpg"
              className="w-full h-full mb-3"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold text-2xl">
              Find Your Perfect Place With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto h-[325px]">
            <img
              src="login-3.jpg"
              alt="login.jpg"
              className="w-full mb-3 h-full"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold text-2xl">
              Find Your Apartments With JohuHousing
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

<p className="font-medium text-[#737D8C]">Not Registered? <span className="text-gray-800 hover:underline" onClick={()=>navigate('/register')}> Register Here</span></p>
<form className="flex flex-col items-center justify-center w-full my-10 gap-5" onSubmit={handleEmailPassLogin}>

<label className="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
<input type="text" className="grow w-full" name="email" placeholder="Enter your email" required/>
</label>
<label className="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
<div className='flex items-center justify-between w-full'>
<input  type={show ? 'text' : 'password'} name='password' className="grow focus:outline-none focus:border-none" placeholder='Password' required/>
<button type='button' onClick={()=>setShow(!show)}>
{show ? <IoEyeOff/> : <IoEye />}
</button>
</div>
</label>
<button type="submit" className="w-[60%] mx-auto bg-[#1daeff] px-10 py-2 rounded-md text-white font-bold">LOGIN</button>
</form>
<div className="w-full">
  <div className="w-[60%] mx-auto flex items-center gap-5">
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  <h1 className="text-[#737D8C] font-medium">Or</h1>
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  </div>
  <div className="w-[70%] mx-auto flex items-center gap-5 justify-center mt-3">
      <button onClick={handleGoogleLogin} className="border border-[#CDD6E1] rounded-full px-5 py-2 flex items-center gap-3">
      <FcGoogle className="text-xl"/>
      <span className="text-[#737D8C] font-medium text-sm">Login with google</span>
      </button>
      <button onClick={handleGithubLogin} className="border border-[#CDD6E1] rounded-full px-5 py-2 flex items-center gap-3">
      <FaGithubAlt className="text-xl"/>
      <span className="text-[#737D8C] font-medium text-sm">Login with GitHub</span>
      </button>
  </div>
</div>
    </div>

  </div>
  )
}

export default SignIn