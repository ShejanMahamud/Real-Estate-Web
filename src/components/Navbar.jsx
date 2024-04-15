import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false)
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success("Successfully logged out!");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="navbar bg-base-100 w-full px-20 mx-auto relative z-50 font-dmsans shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
          >
            <li>
              <a className="text-[#706F6F] font-medium text-lg cursor-pointer">Home</a>
            </li>
            <li>
              <a href="" className="text-[#706F6F] font-medium text-lg cursor-pointer">
                Update Profile
              </a>
            </li>
            {/* <li><a href="" className='text-[#706F6F] font-medium text-lg'>User Profile</a></li> */}
            {/* <li><a href="" className='text-[#706F6F] font-medium text-lg'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>International</a></li> */}
          </ul>
        </div>
        <div
          className="w-full flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="https://i.ibb.co/L84TwCP/logo.png" alt="logo.png" className="w-14" />
          <span className="text-lg font-medium">JohuHousing</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 px-1">
          <li>
            <a className="text-[#706F6F] font-medium cursor-pointer">Home</a>
          </li>
          <li>
            <a
              className="text-[#706F6F] font-medium cursor-pointer"
              onClick={() => navigate("/update-profile")}
            >
              Update Profile
            </a>
          </li>
          {/* <li><a className='text-[#706F6F] font-medium'>User Profile</a></li> */}
          {/* <li><a href="" className='text-[#706F6F] font-medium'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium '>International</a></li> */}
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <div className="relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="user" src={user?.photoURL || 'user-1.png'} />
          </div>
        </summary>
        {showDropdown && (
          <ul className="absolute right-0 top-10 mt-2 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80">
            <li className="font-bold py-2 px-4">Hi! {user?.displayName || 'User'}</li>
            <button onClick={() => navigate('/user-profile')} className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg">
              <FaUserCircle className="text-xl text-gray-400" />
              <span>Profile</span>
            </button>
            <button onClick={() => navigate('/update-profile')} className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg">
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </button>
            <button onClick={handleLogOut} className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg">
              <IoIosLogOut className="text-xl" />
              <span>Logout</span>
            </button>
          </ul>
        )}
      </div>
      : 
      <button
      onClick={() => navigate('/login')}
      className="bg-[#1daeff] text-white px-6 py-2 font-bold rounded-lg uppercase text-base"
    >
      Login
    </button>
      }
    </div>
    </div>
  );
};

export default Navbar;
