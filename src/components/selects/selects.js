import React from 'react'

import Resort from '../../assets/Resort.jpg';
import london from '../../assets/london.jpg';
import lagosnight from '../../assets/lagosnight.jpg';
import toronto from '../../assets/toronto.jpg';
import china from '../../assets/china.jpg';
import Lagos from '../../assets/lagos.jpg';

import Selectimg from '../selectimg/selectimg'

import './selects.css';

function Selects() {
  return (
    <div name='views' className='selects'>
     <div className='container'>
     <Selectimg bgImg={china} text='China' />
      <Selectimg bgImg={lagosnight} text='Lagos' />
      <Selectimg bgImg={toronto} text='Toronto' />
      <Selectimg bgImg={london} text='London' />
      <Selectimg bgImg={Resort} text='Takwa bay' />
      <Selectimg bgImg={Lagos} text='Eko' />
     </div>
    </div>
  )
}

export default Selects