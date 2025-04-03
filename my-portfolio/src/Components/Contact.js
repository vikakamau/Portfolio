import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../src/images/mail.jpg';
import call_icon from '../../src/images/call.jpg';
import location_icon from '../../src/images/location.jpg';

const Contacts = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "b6eb0a6d-da80-4174-ad05-4af1e642851c");

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        alert("Message sent successfully!");
        event.target.reset(); // Reset form fields
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>vikakamau04@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>0705237806</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />

          <label>Write Your Message Here</label>
          <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>

          <button type='submit' className='contact-submit' disabled={loading}>
            {loading ? "Sending..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
