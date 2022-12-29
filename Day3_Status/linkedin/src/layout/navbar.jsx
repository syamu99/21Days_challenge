import React from 'react'
import { FaLinkedin, FaHome } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications} from "react-icons/io";
import { CgProfile} from "react-icons/cg";
import {Link} from 'react-router-dom'
import './index.css';


export default function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbarContentCalone'>
                    <div className='linkedinLogo'>
                        <FaLinkedin size="2em" className='lnklogo' />
                    </div>
                    {/*searchbar*/}
                    <div className='appSearchBar'>
                        <input type="text" placeholder='Search' />
                        <div className='serIcon-navbar'>
                            <AiOutlineSearch size="1.3em" className='serlogo' />
                            <div className='nav-wrap'>

                            </div>
                        </div>

                    </div>
                    <div className='navbarContentCaltwo'>
                        <ul>
                            <li>
                                <div className='RootIconTab'>
                                  <Link to='/'><FaHome /></Link>  
                                </div>
                                <div className='RootIconTabText'>Home</div>
                            </li>
                            <li>
                                <div className='RootIconTab'>
                                <Link to='/MyNetwork'><IoMdPeople /></Link>   
                                </div>
                                <div className='RootIconTabText'>My Network</div>
                            </li>
                            <li>
                                <div className='RootIconTab'>
                                <Link to='/Jobs'>  <BsBriefcaseFill /></Link>
                                </div>
                                <div className='RootIconTabText'>Jobs</div>
                            </li>
                            <li>
                                <div className='RootIconTab'>
                                <Link to='/Messaging'>  <TbMessageCircle /></Link>
                                    
                                </div>
                                <div className='RootIconTabText'>Messaging</div>
                                
                            </li>
                            <li>
                                <div className='RootIconTab'>
                                <Link to='/Notifications'>  <IoMdNotifications/></Link>
                                </div>
                                <div className='RootIconTabText'>Notifications</div>
                            </li>
                            <li>
                                <div className='RootIconTab'>
                                <Link to='/Me'>  <CgProfile /></Link>
                                </div>
                                <div className='RootIconTabText'>Me</div>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}


