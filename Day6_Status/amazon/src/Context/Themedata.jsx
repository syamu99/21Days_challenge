import React, { useState, createContext } from 'react'

const ThemeContext = createContext();
export default ThemeContext; 

export const ThemeProvider = ({ children }) => {
  
  const [darkTheme, setdarkTheme] = useState(false)

  const toggleTheme = (data) => {
    debugger
    setdarkTheme(presData => !presData)
  }

  return (
    <ThemeContext.Provider value={{darkTheme, toggleTheme}}> 
      {children}
    </ThemeContext.Provider>
  )
};



















