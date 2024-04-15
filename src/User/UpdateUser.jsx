import { updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineInsertPhoto } from "react-icons/md";
import { AuthContext } from '../auth/AuthProvider';
import auth from '../auth/config/firebase.config';

const UpdateUser = () => {

  const {user} = useContext(AuthContext)

  const [displayName, setDisplayName] = useState(user.displayName);
  const [email,setEmail] = useState(user.email);
  const [photo,setPhoto] = useState(user.photoURL);
  const [editProfile, setEditProfile] = useState(false)

  const inputRef = useRef(null);

  useEffect( () => {
    inputRef.current.focus();
  },[])

  const handleUpdateProfile = (e) => {
e.preventDefault();
const email = e.target.email.value;
const name = e.target.name.value;
const photo = e.target.photo.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      email: email
    })
    .then(res => {
      toast.success('Profile Updated!');
      setDisplayName(name);
      setEmail(email);
      setPhoto(photo);
      setEditProfile(false)
      e.target.reset();
    })
    .catch(error => {
      toast.error('Something went wrong!')
    })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center h-full py-28 px-40">
        <div className="bg-[#1252ae1f] rounded-full w-20 mx-auto p-3 border border-[#1252ae26] mb-5">
          <img src="logo.png" alt="logo.png" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to JohuHousing</h1>

        <p className="text-[#737D8C] text-center w-[60%] mx-auto text-sm mb-3">Update your profile.</p>

<form className="flex flex-col items-center justify-center w-full my-10 gap-5" onSubmit={handleUpdateProfile}>

<label class="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" name='name' value={displayName} class="grow" placeholder="Name" ref={inputRef} required onChange={(e) => {setDisplayName(e.target.value);setEditProfile(true)}}/>
</label>

<label class="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
<MdOutlineInsertPhoto />
  <input type="text" class="grow" name='photo' placeholder="Photo URL" required value={photo} onChange={(e) => {setPhoto(e.target.value); setEditProfile(true)}}/>
</label>

<label className="input input-bordered flex items-center gap-2 w-[60%] mx-auto">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow w-full" name="email" placeholder="Enter your email" required value={email} onChange={(e)=>{setEmail(e.target.value);setEditProfile(true)}}/>
</label>

<button type="submit" className="w-[60%] mx-auto bg-[#1daeff] px-10 py-2 rounded-md text-white font-bold uppercase">{editProfile ? 'Update' : 'Edit Profile'} </button>
 
</form>

      </div>
  )
}

export default UpdateUser