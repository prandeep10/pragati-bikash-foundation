// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our organization! We are committed to making a difference through our various initiatives and programs. Our team is dedicated to providing exceptional service and support to our community.
      </p>

      <h2>Our Work</h2>
      <ul className="img-list">
        <li><span className="img-placeholder">- placeholder -</span></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg" alt="Work 1" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg" alt="Work 2" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/012.jpg" alt="Work 3" /></li>
        <li><span className="img-placeholder">- placeholder -</span></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/015.jpg" alt="Work 4" /></li>
        <li><span className="img-placeholder">- placeholder -</span></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/038.jpg" alt="Work 5" /></li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/044.jpg" alt="Work 6" /></li>
      </ul>

      <h2>Meet the Team</h2>
      <div className="team-section">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>Bijit Bharadwaj</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Mike Johnson</h3>
          <p>COO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
