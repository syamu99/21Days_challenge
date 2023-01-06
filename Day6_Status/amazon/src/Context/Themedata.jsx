import React, { useState, createContext, useContext } from 'react'




const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext)
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}
const Themedata = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(true)

  function toggleTheme() {
    setdarkTheme(previous => !previous)
  }


  // const[darkMode,setDarkMode]=useState('#ff0000');
  return (
    <ThemeContext.Provider value={ darkTheme }>
      <ThemeUpdateContext.Provider value={ toggleTheme }>
      {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
export { ThemeContext, Themedata }



















