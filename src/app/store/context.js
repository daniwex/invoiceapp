import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
  }
  
export function CustomContext({ children }) {
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light")
  function handletoggleTheme(theme){
    setTheme(theme)
  }
  return <AppContext.Provider value={{message,theme, toggleTheme:handletoggleTheme}}>{children}</AppContext.Provider>;
}
