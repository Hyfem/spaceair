import React from 'react';
import './destination.css';

import Resort from '../../assets/Resort.jpg';
import london from '../../assets/london.jpg';
import lagosnight from '../../assets/lagosnight.jpg';
import toronto from '../../assets/toronto.jpg';
import china from '../../assets/china.jpg';


function Destination() {
  return (
    <div name='destinations' className='Destinations'>
        <div className='container'>
            <h1>All-Location Inclusive</h1>
            <p>Including Local Travels Within Nigeria</p>
        </div>
        <div className='img-container'>
            <img className='span-3 image-grid-row-2' src={Resort} alt='/'/>
            <img src={london} alt='/'/>
            <img src={toronto} alt='/'/>
            <img src={lagosnight} alt='/'/>
            <img src={china} alt='/'/>
        </div>
      
    </div>
  );
}

export default Destination;
