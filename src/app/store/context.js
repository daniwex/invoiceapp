import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
  }
  
export function CustomContext({ children }) {
  let [message, setMessage] = useState({ start: false, time: 5000, mess:"" });
  const [theme, setTheme] = useState("light")
  function handletoggleTheme(theme){
    setTheme(theme)
  }
  function messageSetter(message, time=5000, start=false){
    setMessage({mess:message, time:time, start:start})
  }
  return <AppContext.Provider value={{message,messageSetter:messageSetter,theme, toggleTheme:handletoggleTheme}}>{children}</AppContext.Provider>;
}
