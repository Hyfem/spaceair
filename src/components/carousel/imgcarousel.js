import React from 'react'

import Resort from '../../assets/Resort.jpg';
import london from '../../assets/london.jpg';
import lagosnight from '../../assets/lagosnight.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './imgcarousel.css'


function imgcarousel() {
  return (
    <div name='carousel' classname='container'>
        <Carousel className='Carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
    <div>
        <img src={lagosnight} alt='/' />
        {/*<p className="legend">Lagosnight life</p>*/}
    </div>
    <div>
        <img src={london} alt='/' />
        {/*<p className="legend">London</p>*/}
    </div>
    <div>
        <img src={Resort} alt='/' />
       {/* <p className="legend">Takwa bay</p>*/}
    </div>
</Carousel>
    </div>
  )
}

export default imgcarousel