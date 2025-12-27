import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-container-about">
        <h1>About Us</h1>
        <div className="about-content">
          <p>
            We are a leading diagnostic center committed to providing accurate and compassionate healthcare services.
            Our team of experts uses state-of-the-art technology to ensure the best outcomes for our patients.
          </p>
          <p>
            With years of experience in medical diagnostics, we offer comprehensive testing services including
            blood tests, imaging, cardiology, and specialized screenings. Our modern facilities and dedicated
            staff ensure a comfortable and efficient experience for all our patients.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Doctors</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Test Types</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;