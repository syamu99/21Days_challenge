import React from 'react';
//import MenuIcon from "@mui/icons-material/Menu";
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom'
import './Head.css';
import SearchIcon from "@mui/icons-material/Search"
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RoomIcon from '@mui/icons-material/Room';

const Header = () => {

    return (
        <div>
            <nav className='header'>
                <div className='header_top'>
                    <div className='left_nav_bar'>
                    </div>
                    <Link to='/'><img className='logo' src="/amazon.png" alt="amazon link" /></Link>
                    
                    {/*Delivar to india*/}
                    {/* <Link to='/' className='headerLink'>
                                <div className='headerOptions2'>
                                    <span className="headerOptions-one1">Delivary to</span>
                                    <RoomIcon/>
                                    <span className="headerOptions-two1">India</span>
                                </div>
                    </Link> */}

                    {/*SearchBox*/}
                    <div className='search'>
                        <div className='headerSearch-nav-left'>
                            <div className='nav-left-flex'>
                                <span className='dropdown-name' >All</span>
                                {/* <ArrowDropDownIcon />*/}
                                <select className='Seacrh-Dropdown'>
                                </select>
                            </div>
                        </div>

                        <div className='headerSearch'>
                            <input type='search' className='headersearch-input' placeholder='Search'></input>
                            <SearchIcon className='headersearchIcon' />
                        </div>
                    </div>
                    <div className='headerNavbar-right'>
                        {/* signin /signout*/}

                        {/**/}

                        <div className='headerOptions'>
                            <span className="headerOptions-nav">
                                <span className="headerOptions-nav-one"></span>
                                <img className='headerOptions-nav-two' src="American-flag.png" alt="American" />
                                <div>EN</div>
                                <span className='flag-nation'></span>
                            </span>
                            {/* <Link to='/' className='headerLink'> */}


                            <Link to='/' className='headerLink'>
                                <div className='signin-signout'>
                                    <span className="headerOptions-one">Hello, sign in</span>
                                    <span className="headerOptions-two">Accounts & Lists
                                    <ArrowDropDownIcon className='dropdown-icon' /></span>
                                </div>
                            </Link>
                            {/* Returns & Orders */}
                            <Link to='/' className='headerLink'>
                                <div className='headerOptions1'>
                                    <span className="headerOptions-one">Returns</span>
                                    <span className="headerOptions-two">& Orders</span>
                                </div>
                            </Link>


                            <Link to='/' className='headerLink'>
                                <div className='headerOptions2'>
                                    <span className="headerOptions-one" />
                                    <ShoppingCartOutlinedIcon className='cart' />
                                    <span className="headerOptions-two">Cart</span>

                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                {/* Bottom navbar*/}
                <div className='headerBottom-Nav'>
                    <div className='headerBottom-Nav-left'>
                        <Link to='/' className='headerLink1'>
                            <div className='menubar'>
                                <BiMenu className='menu-icon' />
                                <p>All</p>
                            </div>
                        </Link >

                        <Link to='/' className='headerLink1'>
                            <span>Today's Deals</span> </Link>

                        <Link to='/' className='headerLink1'>
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

                    </div>


                </div>

            </nav>
        </div>

    )
}
export default Header;
