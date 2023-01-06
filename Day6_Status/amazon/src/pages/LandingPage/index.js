import React from 'react';
//  import Header from '../../Components/Header';
import Slideshow from '../../Components/grid1-slides'
//import { ThemeContext } from '../../Context/Themedata'
import { useTheme} from '../../Context/Themedata'

const LandingPage = () => {

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? 'blue' : 'red',
    // color: darkTheme ? '#90d4ea' : '#336',
    // padding: '2rem',
    // margin: '2rem'

  }
  // const {darkMode}=useContext(ThemeContext);
  return (
    <>
      {/* <div style={{height:50,width:100,display:'flex'}}> */}
      {/* <div style={{backgroundColor: darkMode}}> */}

      <div  style={themeStyles}>
        < Slideshow />
        <div ></div>
      </div>
      {/* <Grid2 /> */}

    </>
  )
}

export default LandingPage