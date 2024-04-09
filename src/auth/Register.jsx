import { updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "./AuthProvider";
import auth from "./config/firebase.config";

const Register = () => {

const navigate = useNavigate();
const [show, setShow] = useState(false);
const inputRef = useRef(null);
const {emailPassRegister} = useContext(AuthContext)

const handleEmailPassRegister = (e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    const terms = e.target.terms.checked;

    if(password.length < 6){
        toast.error('Password must be 6 characters long!');
        return;
    }

    if(!passwordRegex.test(password)){
        toast.error('Password must be strong!');
        return;
    }

    if(!terms){
        toast.error('Please accept TOC!');
        return;
    }

    emailPassRegister(auth,email,password)
    .then(res => {
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
        .then(res => {
            toast.success('Successfully Registered!');
            e.target.reset();
        })
    })
    .catch(error => {
        if(error.code === 'auth/email-already-in-use'){
            toast.error('User already exist!');
            return;
        }
        toast.error('Something went wrong!')
    })
}

useEffect(()=>{
    inputRef.current.focus();
},[])

  return (
    <div className="w-full grid grid-cols-2 row-auto items-center gap-10 font-dmsans border-t border-b border-[#CDD6E1] min-h-screen">
      <div className="w-full bg-[#1daeff] min-h-screen bg-[url('shape.png')] bg-no-repeat bg-cover bg-center pt-10 flex items-center justify-center h-full">
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
      <div className="w-full h-full flex flex-col items-center justify-center h-full">
        <div className="bg-[#1252ae1f] rounded-full w-20 mx-auto p-3 border border-[#1252ae26] mb-5">
          <img src="logo.png" alt="logo.png" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to JohuHousing</h1>
        {/* <p className="text-[#737D8C] text-center w-[60%] mx-auto text-sm mb-3">Welcome back! login with your data that you entered 
// during registration.</p> */}
<p className="font-medium text-[#737D8C]">Already Registered? <span onClick={()=>navigate('/login')} className="text-gray-800 hover:underline"> Login Here</span></p>
<form className="flex flex-col items-center justify-center w-full my-10 gap-5" onSubmit={handleEmailPassRegister}>

<label class="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" name='name' class="grow" placeholder="Name" ref={inputRef} required/>
</label>

<label class="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
<MdOutlineInsertPhoto />
  <input type="text" class="grow" name='photo' placeholder="Photo URL" required/>
</label>

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
  <div className='w-[60%] mx-auto flex items-center justify-start gap-3'>
  <input type="checkbox" name="terms" class="checkbox" />
  <span className='text-gray-500'>Accept our terms and conditions</span>
  </div>
<button type="submit" className="w-[60%] mx-auto bg-[#1daeff] px-10 py-2 rounded-md text-white font-bold">REGISTER</button>
</form>

      </div>
    </div>
  );
};

export default Register;
