import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

const Functionalcomponent = () => {
    const darkTheme = useTheme();
    const toggleTheme= useThemeUpdate();
    const themeStyles={
      backgroundColor: darkTheme ? '#378' : '#ccc',
      color: darkTheme ? '#ccc' : '#336',
      padding: '2rem',
      margin: '2rem'

    }

  return (
    <div>
     
      <button onClick={toggleTheme} >ToggleTheme</button>
     <div style={themeStyles} >functoinal theme</div>
    </div>
  )
}

export default Functionalcomponent
