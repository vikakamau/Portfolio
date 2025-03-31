import React, { useState } from 'react';
import './Mywork.css';
import mywork_data from '../images/mywork_data';
import arrow_icon from '../../src/images/download (1).png';

const Mywork = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState('image'); // 'image' or 'video'

  const handleMediaClick = (media, type) => {
    setSelectedMedia(media);
    setMediaType(type);
  };

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
      </div>

      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          work.w_vid ? (
            // Video item
            <div key={index} className="media-container">
              <video
                className="video-item"
                onClick={() => handleMediaClick(work.w_vid, 'video')}
                poster={work.w_img} // Using image as poster frame
                muted
                loop
              >
                <source src={work.w_vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="media-info">
                <h3>{work.w_name}</h3>
              </div>
            </div>
          ) : (
            // Image item
            <div key={index} className="media-container">
              <img
                src={work.w_img}
                alt={work.w_name}
                onClick={() => handleMediaClick(work.w_img, 'image')}
              />
              <div className="media-info">
                <h3>{work.w_name}</h3>
              </div>
            </div>
          )
        ))}
      </div>

      <div className='mywork-showmore'>
        <p>Show More</p> 
        <img src={arrow_icon} alt='' />
      </div>

      {/* Modal for Full Media View */}
      {selectedMedia && (
        <div className="modal" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content">
            {mediaType === 'image' ? (
              <img src={selectedMedia} alt="Full View" />
            ) : (
              <video 
                controls 
                autoPlay 
                className="video-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <source src={selectedMedia} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mywork;
