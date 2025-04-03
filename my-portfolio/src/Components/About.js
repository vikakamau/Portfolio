import React, { useEffect, useState } from 'react';
import './About.css';
import profile_img from '../../src/images/victor.jpg';

const About = () => {
  // State for animated numbers
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const expInterval = setInterval(() => {
      setExperience((prev) => (prev >= 4 ? 0 : prev + 1)); // Reset after reaching 4
    }, 500);

    const projInterval = setInterval(() => {
      setProjects((prev) => (prev >= 10 ? 0 : prev + 1)); // Reset after reaching 10
    }, 200);

    const clientsInterval = setInterval(() => {
      setClients((prev) => (prev >= 15 ? 0 : prev + 1)); // Reset after reaching 15
    }, 150);

    // Cleanup intervals when the component unmounts
    return () => {
      clearInterval(expInterval);
      clearInterval(projInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me </h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              I am a Full Stack Developer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions.
            </p>
            <p>
              I specialize in both front-end and back-end development to create seamless digital experiences.
            </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className='about-skill'><p>React js</p><hr style={{ width: "70%" }} /></div>
            <div className='about-skill'><p>Javascript</p><hr style={{ width: "60%" }} /></div>
            <div className='about-skill'><p>Python</p><hr style={{ width: "50%" }} /></div>
            <div className='about-skill'><p>MySQL</p><hr style={{ width: "50%" }} /></div>
            <div className='about-skill'><p>PostgreSQL</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>

      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>{experience}+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>{projects}+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>{clients}+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
