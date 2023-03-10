import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Username");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
    if (!token) {
      setIsLoggedIn(false);
    }
  }, [token]);

  const handleTokenValue = (value) => {
    if (value) {
      setToken(value);
      setIsLoggedIn(true);
      localStorage.setItem("token", `${value}`);
    }
    if (!value) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }
  };

  const handleUserName = (value) => {
    setUserName(value);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, token, handleTokenValue, userName, handleUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};
