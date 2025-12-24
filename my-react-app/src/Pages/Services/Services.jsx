import React from 'react';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-container">
        <h1>Our Services</h1>
        <ServiceSection />
      </div>
    </div>
  );
};

export default Services;