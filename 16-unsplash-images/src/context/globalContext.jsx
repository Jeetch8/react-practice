import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const globalContext = createContext();

const getIntitalDarkTheme = () => {
  const preferedDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || preferedDarkMode;
};

export const GlobalContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("cat");
  const [isDarkTheme, setIsDarkTheme] = useState(getIntitalDarkTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const changeSearchValue = (e) => {
    setSearchValue(e);
  };

  return (
    <globalContext.Provider
      value={{
        searchValue,
        changeSearchValue,
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(globalContext);
};
