import { createContext, useContext, useState } from "react";

const Authentication = createContext(null);

export const AuthProvider = ({ children }) => {
  //State
  const [loggedInUser, setLoggedInUser] = useState(null);
  //Handlers
  const login = (user) => setLoggedInUser(user);
  const logout = () => setLoggedInUser(null);
  //view

  return (
    <Authentication.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </Authentication.Provider>
  );
};

export const Auth = () => useContext(Authentication);
