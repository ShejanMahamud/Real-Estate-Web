import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Companies from './components/Companies';
import Countries from './components/Countries';
import EstateSection from './components/EstateSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Home = () => {

  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProperties(data))
  },[])

  console.log(properties)

  return (
	<div>
    <Navbar/>
    <Banner/>
    <Companies/>
    <Countries/>
    <EstateSection properties={properties}/>
    <Footer/>
  </div>
  )
}


export default Home;
