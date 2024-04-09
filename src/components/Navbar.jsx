import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {

const navigate = useNavigate();

const {user,logOut} = useContext(AuthContext);

const handleLogOut = () => {
  logOut()
  .then(res => {
    toast.success('Successfully logged out!')
  })
  .catch(error => {
    toast.error('Something went wrong!')
  })
}

  return (
<div className="navbar bg-base-100 w-[90%] mx-auto font-poppins relative z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
        <li><a className='text-[#706F6F] font-medium text-lg'>Home</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>Update Profile</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>User Profile</a></li>
        {/* <li><a href="" className='text-[#706F6F] font-medium text-lg'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>International</a></li> */}
      </ul>
    </div>
    <div className='w-full flex items-center cursor-pointer' onClick={()=>navigate('/')}>
        <img src="logo.png" alt="logo.png" className='w-14'/>
        <span className='text-lg font-medium'>JohuHousing</span>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-8 px-1">
    <li><a className='text-[#706F6F] font-medium'>Home</a></li>
        <li><a className='text-[#706F6F] font-medium' onClick={()=>navigate('/update-profile')}>Update Profile</a></li>
        <li><a href="" className='text-[#706F6F] font-medium'>User Profile</a></li>
        {/* <li><a href="" className='text-[#706F6F] font-medium'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium '>International</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
  { user ?
 <details className="dropdown dropdown-end">
    <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="user" src={user?.photoURL || 'user-1.png'} />
      </div>
    </summary>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li onClick={handleLogOut}><a>Logout</a></li>
    </ul>
  </details>

:
        
        <button onClick={()=>navigate('/login')} className='bg-[#1daeff] text-white px-6 py-2 font-bold rounded-lg uppercase text-base '>Login</button>
            }
  </div>
</div>
  )
}

export default Navbar