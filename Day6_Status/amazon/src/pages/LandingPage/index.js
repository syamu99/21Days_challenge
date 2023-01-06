import React, { useContext } from 'react';
//  import Header from '../../Components/Header';
import Slideshow from '../../Components/grid1-slides'

import ThemeContext, { useTheme } from '../../Context/Themedata'

const LandingPage = () => {

  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? '#90d4ea' : '#e2c0ea',
    // color: darkTheme ? '#90d4ea' : '#336',
    // padding: '2rem',
    // margin: '2rem'

  }
  return (
    <>
      <div style={themeStyles}>
        < Slideshow />
        <div ></div>
      </div>

    </>
  )
}

export default LandingPage