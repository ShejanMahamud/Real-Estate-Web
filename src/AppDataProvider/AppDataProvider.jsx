import React, { createContext } from "react";
export const AppContext = createContext(null);

const AppDataProvider = ({ children }) => {


  return (
    <AppContext.Provider value={appInfo}>
    {children}
    </AppContext.Provider>
  );
};

export default AppDataProvider;
