import React from 'react';
//import MenuIcon from "@mui/icons-material/Menu";
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom'
import './Head1.css';
import SearchIcon from "@mui/icons-material/Search"
import RoomIcon from '@mui/icons-material/Room';
import { BsCart3 } from "react-icons/bs";
import {useThemeUpdate,useTheme} from '../../Context/Themedata'
// import {useTheme, useThemeUpdate} from '../../Context/Themedata'

const Header = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

   
  const themeStyles = {
    backgroundColor: darkTheme ? '#00ff00' : '#336',
    // color: darkTheme ? '#ccc' : '#336',
    // padding: '2rem',
    // margin: '2rem'

  }
// const {darkMode,setDarkMode} = useContext(ThemeContext)
    
    return (
        <div>
            <nav className='header'>
                <div className='header_top'>
                    <div className='left_nav_bar'>
                    </div>
                    <Link to='/'><img className='logo' src="/amazon.png" alt="amazon link" /></Link>

                    <div className="headerNavbar">
                        <Link to='/Delivary' className='headerLink'>
                            <div className='headerOptions'>
                                <span className="headerOptions-one">Deliverto</span>
                                <RoomIcon className='roomiconlogo' />
                                <span className="headerOptions-two">India</span>
                            </div>
                        </Link>
                    </div>

                    {/*SearchBox*/}
                    <div className='search'>

                        <div className='headerSearch-nav-left'>
                            <div className='nav-left-flex'>
                                <Link to='/All Dropdown' className='headerLink'>
                                    <p className='psize'>All</p>
                                    {/* <ArrowDropDownIcon />*/}
                                    <select className='Seacrh-Dropdown'>
                                    </select>
                                </Link>
                            </div>
                        </div>

                        <div className='headerSearch'>
                            <input type='search' style={{borderBlockColor:darkTheme}}className='headersearch-input' placeholder='Search'></input>
                            <Link to='/All SearchIcon' className='headerLink'></Link>
                            <SearchIcon className='headersearchIcon' />
                        </div>
                    </div>

                    <div className='headerOptions1'>
                        <img className='headerOptions-nav-two' src="American-flag.png" alt="American" />
                        <span className='flag-nation'>EN</span>
                    </div>
                    {/* signin /signout*/}
                    <div className="headerNavbar">
                        <Link to='/Signin' className='headerLink'>
                            <div className='headerOptions'>
                                <span className="headerOptions-one">Hello,Signin</span>
                                <span className="headerOptions-two">Accounts&Lists</span>
                            </div>
                        </Link>
                        {/*Returns and orders*/}
                        <Link to='/Return' className='headerLink'>
                            <div className='headerOptions'>
                                <span className="headerOptions-one">Returns</span>
                                <span className="headerOptions-two">&Orders</span>
                            </div>
                        </Link>

                        <Link to='/Cart' className='headerLink'>
                            <div className='headerOptions'>
                                <BsCart3 className='cart' size={40} />
                                <span className="headerOptions-two">Cart</span>
                            </div>
                        </Link>


                    </div>

                </div>
                {/* Bottom navbar*/}
                <div className='headerBottom-Nav'>
                    <div className='headerBottom-Nav-left'>
                        <Link to='/All' className='headerLink1'>
                            <div className='menubar'>
                                <BiMenu className='menu-icon' />
                                <p>All</p>
                            </div>
                        </Link >

                        <Link to='/todaysDeals' className='headerLink1'>
                            <span>Today's Deals</span> </Link>

                        <Link to='/CustomerService' className='headerLink1'>
                            <span>Customer Services</span>
                        </Link>
                        <Link to='/' className='headerLink1'>
                            <span>Gift Cards</span>
                        </Link>
                        <Link to='/' className='headerLink1'>
                            <span>Registry</span>
                        </Link>
                        <Link to='/' className='headerLink1'>
                            <span>Sell</span>
                        </Link>
                        {/* <button onClick={()=>setDarkMode('#00ff00')}>darkMode</button> */}
                        <button onClick={toggleTheme} >ToggleTheme</button>
                        {/* <div style={themeStyles} ></div> */}
                    </div>


                </div>
                {/* </div> */}
            </nav>
        </div>

    )
}
export default Header;
