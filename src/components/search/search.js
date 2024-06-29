import React, { useState } from 'react';
import africanwoman from '../../assets/africanwoman.jpg';
import './search.css';

function Search() {
  const [showMessage, setShowMessage] = useState(false);

  // Function to show alert message
  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div name='book' className='search'>
      <div className='container'>
        <div className='left'>
          <h2>Luxury Includes Vacation For Two People</h2>
          <p>Indulge in an extraordinary getaway tailored for two, where every moment is infused with opulence and elegance. Our exclusive luxury vacation package offers the ultimate escape, featuring five-star accommodations, gourmet dining experiences, and personalized service. Whether you're exploring exotic destinations or relaxing in a serene paradise, every detail is designed to ensure your journey is nothing short of perfection. Treat yourself and your loved one to a vacation that promises to create unforgettable memories and rejuvenate your spirit. Discover the pinnacle of luxury and romance with our exclusive vacation for two.</p>
          <div className='search-col-2'>
            <div className='box'>
              <div>
                <img className='logogowoman' src={africanwoman} alt='African Woman' style={{ marginRight: '1rem' }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY UP TO 20 YEARS IN A ROW</p>
              </div>
            </div>
            <div className='box'>
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANIES UP TO 20 YEARS IN-A-ROW</p>
                <div className='button-wrapper'>
                  <button type='button' onClick={handleButtonClick}>View Package</button>
                  {showMessage && (
                    <div className='popup-message'>
                      We are out of service, thanks for your interest.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='promo'>
            <h4 className='save'> GET A CHANCE OF 7% OFF</h4>
            <p className='timer'>12 HRS LEFT</p>
            <p className='offers'>VIEW ALL CURRENT OFFERS</p>
          </div>
          <div className='input-wrap'>
            <label>Destination</label>
            <select>
              <option value='1'>TAKWA BAY</option>
              <option value='2'>MALDIVES</option>
              <option value='3'>LA CAPANTRO</option>
              <option value='4'>MIAMI</option>
            </select>
          </div>
          <div className='date'>
            <div className='input-wrap'>
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className='input-wrap'>
              <label>Check Out</label>
              <input type="date" />
            </div>
            <div className='button-wrapper'>
              <button type='button' onClick={handleButtonClick}>Rates & Availabilities</button>
              {showMessage && (
                <div className='popup-message'>
                  We are out of service, thanks for your interest.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
