import React, { useState } from 'react';
import './Mywork.css';
import mywork_data from '../images/mywork_data';
import arrow_icon from '../../src/images/download (1).png';

const Mywork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
      </div>

      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <img 
            key={index} 
            src={work.w_img} 
            alt="" 
            onClick={() => setSelectedImage(work.w_img)}
          />
        ))}
      </div>

      <div className='mywork-showmore'>
        <p>Show More</p> 
        <img src={arrow_icon} alt='' />
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mywork;
