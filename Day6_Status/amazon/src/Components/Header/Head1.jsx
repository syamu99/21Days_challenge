import React, { useContext } from "react";
//import MenuIcon from "@mui/icons-material/Menu";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Head1.css";
import SearchIcon from "@mui/icons-material/Search";
import { BiMap } from "react-icons/bi";
// import RoomIcon from "@mui/icons-material/Room";
import { BsCart3 } from "react-icons/bs";
import ThemeContext from "../../Context/Themedata";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
// import {useTheme, useThemeUpdate} from '../../Context/Themedata'

const Header = () => {
  const { toggleTheme, darkTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="header">
        <div className="header_top">
          <Link to="/">
            <img className="logo" src="/amazon.png" alt="amazon link" />
          </Link>

          <div className="Deliver-location">
            <Link to="/Deliver" className="headerLink">
              <div className="deliver">Deliver to</div>
              <div className="location">
                <BiMap size="30px" />
                <b>India</b>
              </div>
            </Link>
          </div>

          {/*SearchBox*/}
          <div className="search">
            <div className="headerSearch-nav-left">
              <Link to="/Alldropdown" className="headerLink alllink">
                <p className="psize">All</p>
                {/* <ArrowDropDownIcon />*/}
                <select className="Seacrh-Dropdown"></select>
              </Link>
            </div>
            <div className="headerSearch">
              <input
                type="search"
                style={{ borderBlockColor: darkTheme }}
                className="search-input"
                placeholder="Search"
              ></input>
              <SearchIcon className="headersearchIcon" />
            </div>
          </div>
          <div className="headerOptions1">
            <div className="headerOptions-nav-two">
            <img
              src="American-flag.png"
              alt="American"
            />
            </div>
            <div className="flag-language">
              <b>EN</b>
              <AiFillCaretDown className="icon" />
            </div>           
          </div>
          {/* signin /signout*/}
          <Link to="/Signin" className="headerLink">
            <div className="headerOptions-one">Hello,Signin</div>
            <div className="headerOptions-two">
              <b>Accounts&Lists</b>
              <AiFillCaretDown/>
            </div>
          </Link>
          {/*Returns and orders*/}
          <Link to="/Return" className="headerLink">
            <div className="headerOptions-one">Returns</div>
            <div className="headerOptions-two">
              <b>&Orders</b>
            </div>
          </Link>
          <Link to="/Cart" className="headerLink">
            <BsCart3 className="cart" size={40} />
            <div className="headerOptions-two carttext">
              <b>Cart</b>
            </div>
          </Link>
        </div>
        {/* Bottom navbar*/}
        <div className="headerBottom-Nav">
          <div className="headerBottom-Nav-left">
            <Link to="/All" className="headerLink1">
              <div className="menubar">
                <BiMenu className="menu-icon" />
                <p>All</p>
              </div>
            </Link>

            <Link to="/todaysDeals" className="headerLink1">
              <span>Today's Deals</span>{" "}
            </Link>

            <Link to="/CustomerService" className="headerLink1">
              <span>Customer Services</span>
            </Link>
            <Link to="/Giftcards" className="headerLink1">
              <span>Gift Cards</span>
            </Link>
            <Link to="/Registry" className="headerLink1">
              <span>Registry</span>
            </Link>
            <Link to="/sell" className="headerLink1">
              <span>Sell</span>
            </Link>
            <button className="toggle" onClick={() => toggleTheme(true)}>
              <AiFillFolder className="folder" />
            </button>
            <div className="Bottam-right-nav">
              <Link to="/Shopdeals" className="headerLink1">
                Shop great deals now
              </Link>
            </div>
            {/* <button onClick={()=>setDarkMode('#00ff00')}>darkMode</button> */}
            {/* <button onClick={toggleTheme} >ToggleTheme</button> */}
            {/* <div style={themeStyles} ></div> */}
          </div>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};
export default Header;

