import React from 'react'
import './About.css'

import profile_img from '../../src/images/murithi.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
        <h1>About me </h1>
      

    </div>
    <div className='about-sections'>
        <div className='about-left'>
<img src={profile_img} alt=''/>   
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am a Full Stack Developer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions.</p>
                <p> I specialize in both front-end and back-end development to create seamless digital experiences.</p>
            </div>
            <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className='about-skill'><p>React js</p><hr style={{width:"70%"}} /></div>
            <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}} /></div>
            <div className='about-skill'><p>Python</p><hr style={{width:"50%"}} /></div>
            <div className='about-skill'><p>My sql</p><hr style={{width:"50%"}} /></div>
            <div className='about-skill'><p>Postgresol</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
    </div>
    <div className='about-achievements'>
    <div className='about-achievement'>
      <h1>5+</h1> 
      <p>YEARS OF EXPERIENCE</p>
        </div> 
        <hr/>
        <div className='about-achievement'>
      <h1>10+</h1> 
      <p>PROJECTS COMPLETED</p>
        </div> 
        <hr/>
        <div className='about-achievement'>
      <h1>15+</h1> 
      <p>HAPPY CLIENTS</p>
        </div> 
        <hr/>

    </div>
    </div>
   

  )
}

export default About