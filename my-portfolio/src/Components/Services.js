import React from 'react';
import './Services.css';
import { Services as ServicesData, Pricing } from '../images/services.data.js';
import { CheckCircle } from 'lucide-react';
import AnchorLink from "react-anchor-link-smooth-scroll";


const ServicesComponent = () => {
  return (
    <div id='services' className='services'>
      <h1 className='services-title'>My Services</h1>
      
      {/* Services List */}
      <div className='services-container'>
        {ServicesData.map((service, index) => (
          <div key={index} className='service-card'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing List */}
      <h1 className='services-title'>Pricing Plans</h1>
      <div className='services-container'>
        {Pricing.map((plan) => (
          <div key={plan.id} className={`service-card ${plan.tag ? 'highlighted' : ''}`}>
            <div className='service-header'>
              <h2>{plan.title}</h2>
              {plan.tag && <span className='service-tag'>{plan.tag}</span>}
            </div>
            <p className='service-subtitle'>Perfect for small businesses</p>
            <h3 className='service-price'>From <span>{plan.price}</span></h3>
            <ul className='service-features'>
              {plan.features.map((feature, index) => (
                <li key={index} className='feature-item'>
                  <CheckCircle size={16} className='feature-icon' /> {feature}
                </li>
              ))}
            </ul>
            {plan.idealFor && (
              <div className='ideal-for'>
                <strong>Ideal for:</strong>
                <ul>
                  {plan.idealFor.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul>
              </div>
            )}
           <AnchorLink className="anchor-link" offset={50} href='#contact'>
  <button className='service-btn'>Get Started ↗</button>
</AnchorLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
