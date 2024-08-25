// OurWork.js
import React from 'react';
import './OurWork.css'; // Importing CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OurWork = () => {
  return (
    <div className="our-work">
      <div className="our-work-content">
        <h2 className="section-title">Our Work</h2>
        <p className="section-description">
          We started our NGO at 2020, and have given an effort to bring some change, here are some of our work.</p>
      </div>
      <div className="carousel-container">
        <Carousel>
          <div>
            <img src="/work1.jpeg" alt="Work 1" />
          </div>
          <div>
            <img src="/work2.jpeg" alt="Work 2" />
          </div>
          <div>
            <img src="/work3.jpg" alt="Work 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OurWork;
