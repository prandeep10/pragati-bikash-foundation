// AboutSection.js
import React from 'react';
import './AboutSection.css'; // Importing CSS file

const AboutSection = () => {
  return (
    <div className="about-section" id='aboutsection'>
      <div className="about-content">
        <h2 className="section-title">Who are we?</h2>
        <p className="section-description">
          We are an NGO based in Assam, providing facilities to develop a better society by providing support to students. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas vero veniam doloremque velit odit accusamus et eos molestias labore quia quod, molestiae sit temporibus tempore minus voluptate aspernatur beatae.
          </p>
      </div>
      <div className="about-image">
        <img src="/aboutimage.jpeg" alt="About Image" />
      </div>
    </div>
  );
};

export default AboutSection;
