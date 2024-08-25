import React from 'react';
import './HeroSection.css'; // Importing CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="brand-name">Pragati Bikash Foundation</h1>
        <p className="hero-paragraph">
          We work for the wellness of the society, established at year 2020 from the state of Assam with a motive to restore hope among vulnerable children and communities that have been affected by poverty, abuse, violence, drugs, diseases and other natural calamities.
        </p>
        <a href="#aboutsection" className="button-20">Know About Us</a>
      </div>
      <div className="hero-image">
        <img src="/heroimage.webp" alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
