import React from 'react';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import './Services.css';

const Services = () => {
  const services = [
    {
      image: '/src/assets/service1.jpg',
      title: 'Health Diagnosis',
      description: 'Comprehensive diagnostic tests for accurate health assessment.',
      linkText: 'View More →',
      onClick: () => console.log('Health Diagnosis clicked')
    },
    {
      image: '/src/assets/service2.jpg',
      title: 'Health Consultation',
      description: 'Expert consultations with our experienced medical professionals.',
      linkText: 'View More →',
      onClick: () => console.log('Health Consultation clicked')
    },
    {
      image: '/src/assets/service3.jpg',
      title: 'Health Packages',
      description: 'Customized health packages tailored to your needs.',
      linkText: 'View More →',
      onClick: () => console.log('Health Packages clicked')
    }
  ];

  return (
    <div className="services-page">
      <div className="page-container">
        <ServiceSection services={services} />
      </div>
    </div>
  );
};

export default Services;