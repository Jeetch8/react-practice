import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const globalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("cat");

  const changeSearchValue = (e) => {
    setSearchValue(e);
  };

  return (
    <globalContext.Provider
      value={{
        searchValue,
        changeSearchValue,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(globalContext);
};
