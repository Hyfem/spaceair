import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './footer.css';

function footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
         <h3>SpaceAir</h3>
         <div className='socials'>
            <FaSquareXTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />

         </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <ul>
              <li>About</li>
              <li>Partnership</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className='right'>
          <ul>
              <li>Contacts</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default footer;