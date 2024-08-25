// ServicesSection.js
import React from 'react';
import './ServicesSection.css'; // Importing CSS file

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3 className="service-title">Service 1</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Service 2</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Service 3</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
