import React, { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './auth/AuthProvider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
export const DataContext = createContext(null);

const Root = () => {

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch('../public/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
      });
  }, []);

  const rentProperties = () => {
    const rentProps = properties.filter(property => property.status.includes('Rent'));
    setFilteredProperties(rentProps); 
}

  const sellProperties = () => {
    const sellProps = properties.filter(property => property.status.includes('Sale'));
    setFilteredProperties(sellProps); 
}

const seeAllProperties = () => {
    setFilteredProperties(properties); 
}

  const appInfo = {
    properties,
    rentProperties,
    seeAllProperties,
    sellProperties,
    filteredProperties
  };

const {loading} = useContext(AuthContext)

  return (
    <DataContext.Provider value={appInfo}>
    {
        loading ? <div className='w-full min-h-screen bg-transparent backdrop-blur-sm flex items-center justify-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#1daeff]"></div>
      </div>
      :
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
  </div>
    }
 </DataContext.Provider>
  )
}

export default Root