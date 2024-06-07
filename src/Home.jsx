import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import { AuthContext } from './auth/AuthProvider';
import Banner from './components/Banner';
import Companies from './components/Companies';
import Countries from './components/Countries';
import EstateSection from './components/EstateSection';

const Home = () => {

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
