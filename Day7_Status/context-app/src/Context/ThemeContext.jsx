import React,{createContext, useState, useContext} from 'react'


const ThemeContext= createContext()
const ThemeUpdateContext = createContext()

export function useTheme(){
    return useContext(ThemeContext)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
   
}

export function ThemeProvider ({children}) {
const [darkTheme, SetdarkTheme] = useState(true)

function toggleTheme(){
SetdarkTheme(prevDarkTheme => !prevDarkTheme)

}

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
       </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}


