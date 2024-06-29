import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from 'react-scroll';

import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false); 

    const handleNav = () => setNav(!nav);

    return (
        <div name='home' className={nav ? 'navBar navBar-bg' : 'navBar'}>
            <div className={nav ? 'logo dark': 'logo'}>
                <h2>spaceAir</h2>
            </div>
            <ul className='nav-menu'>
            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
                
            </ul>
            <div className='nav-icons'>
                <FaSearch style={{marginRight: '1rem'}} />
                <BsPerson />
            </div>
            <div className='hamburger' onClick={handleNav}>
                {!nav ?(<FaHamburger className='icon' />) : (<AiOutlineClose   style={{color: '#000'}} />)}
                
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
                   
                </ul>
                <div className='mobile-menu-button'>
                    <div className='menu-icons'>
                        <button>SEARCH</button>
                        <button>ACCOUNT</button>
                    </div>
                    <div className='social-icons'>
                        <FaSquareXTwitter className='icon' />
                        <FaInstagram className='icon' />
                        <FaLinkedin className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
