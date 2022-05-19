import React, { useState, createContext } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [favorites, setfavorites] = useState(localStorage.getItem("favorites")? JSON.parse(localStorage.getItem("favorites")):[]);
  
  const data = {
    favorites,
    setfavorites
  };

  return <Context.Provider value={data}> {children} </Context.Provider>;
}
