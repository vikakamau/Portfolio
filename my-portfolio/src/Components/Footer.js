import React from 'react';
import './Footer.css';

import user_icon from '../../src/images/user.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h1>Dickson<span style={{ color: '#ff0080' }}>M</span></h1>
          <p>
            I am a Full Stack Developer and a Digital Marketer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions, I specialize in both front-end and back-end development to create seamless digital experiences.
          </p>
        </div>
        <div className='footer-email-container'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='User Icon' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <button className='footer-subscribe'>Subscribe</button>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2025 Dickson Murithi. All rights reserved.</p>
        <div className='footer-bottom-right'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
