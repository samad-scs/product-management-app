import React, { createContext, useContext, useState } from 'react';

const AppDataContext = createContext({
  user: null,
  setUser: () => {},
});

export const AppDataProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const defaultData = {
    user,
    setUser: data => {
      setUser(data);
    },
  };

  return (
    <AppDataContext.Provider value={defaultData}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;

export const useAppData = () => useContext(AppDataContext);
