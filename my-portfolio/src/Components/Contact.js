import React from 'react'
import './Contact.css'
import mail_icon from '../../src/images/mail.jpg'
import call_icon from '../../src/images/call.jpg'
import location_icon from '../../src/images/location.jpg'

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b669f9c-5578-42a3-9ac7-a65703784b6b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };



  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
       

      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Lets talk</h1>
          <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>dicksonmurithi155@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <img src={call_icon} alt='' /> <p>0725260473</p>
              
              </div>
              <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>Nairobi,Kenya</p>
              
              </div>
          </div>
          </div>
          <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor= "">Your name</label>
            <input type='text' placeholder='Enter your name' name='name'></input>
            <label htmlFor="">Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'></input>
            <label htmlFor="">Write your message here</label>
            <textarea name='message'  rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
            </form>
      </div>

    </div>
  )
}

export default Contacts