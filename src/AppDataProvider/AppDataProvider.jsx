import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

const AppDataProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch("data.json")
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

  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
