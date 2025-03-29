import React from 'react'
import './Hero.css'
import profile_img from '../../src/images/graduation.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Dickson Murithi,</span> full stack Developer based in Kenya.</h1>
        <p>I am a Full Stack Developer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions, I specialize in both front-end and back-end development to create seamless digital experiences</p>
        <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
        </div>
        </div>
  )
}

export default Hero