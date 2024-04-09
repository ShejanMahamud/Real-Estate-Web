import React, { useContext } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from './auth/AuthProvider';
import Banner from './components/Banner';
import Companies from './components/Companies';
import Countries from './components/Countries';
import EstateSection from './components/EstateSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = () => {

  const location = useLocation();

  const {loading} = useContext(AuthContext)

  const showElement = [
    "/login",
    '/register'
  ].includes(location.pathname);

  return (

    <>
    {
      loading ? <div className='w-full min-h-screen bg-transparent backdrop-blur-sm flex items-center justify-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#1daeff]"></div>
      </div>
      :
      <div>
    <Navbar/>
    <Outlet/>
    {
      !showElement && <>
      <Banner/>
    <Companies/>
    <Countries/>
    <EstateSection/>
      </>
    }
    <Footer/>
  </div>
    }
    </>
  )
}


export default Home;
