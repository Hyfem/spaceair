import React from 'react'


import './selects.css';

function selectimg({bgImg, text}) {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt='/' />
        <div className='overlay'>
            <p>{text}</p>

        </div>
    </div>
  )
}

export default selectimg