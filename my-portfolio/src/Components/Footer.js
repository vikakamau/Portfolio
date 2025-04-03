import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

import user_icon from '../../src/images/user.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h1>Victor<span style={{ color: '#ff0080' }}>K</span></h1>
          <p>
            I am a Full Stack Developer and a Digital Marketer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions, I specialize in both front-end and back-end development to create seamless digital experiences.
          </p>
          <div className="footer-social-links">
            <a href="https://github.com/vikakamau?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/victor-kamau-680211281" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:vikakamau04@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
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
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#contact">Connect with me</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
