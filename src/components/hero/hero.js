import React from 'react';
import video from '../../assets/planevideo.mp4';
import {AiOutlineSearch} from 'react-icons/ai'
import './heroStyle.css';

function Hero() {
  return (
    <div className='hero'>
      <video id='video' autoPlay loop muted>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1>First Class Travel</h1>
        <h2>top 1% Location Worldwide</h2>
        <form className='form'>
          <div>
           <input type='search' placeholder='Search Destination'/>
          </div>
          <div>
            <button><AiOutlineSearch/></button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default Hero;
