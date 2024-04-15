import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { AuthContext } from './auth/AuthProvider';
import Banner from './components/Banner';
import Companies from './components/Companies';
import Countries from './components/Countries';
import EstateSection from './components/EstateSection';

const Home = () => {

  // const showElement = [
  //   "/login",
  //   '/register',
  //   '/property/'
  // ].includes(location.pathname);

  // const showElement2 = !location.pathname.startsWith('/property/');

  return (
    <>
      <Banner/>
    <Companies/>
    <Countries/>
    <EstateSection/>
    </>
  )
}


export default Home;
