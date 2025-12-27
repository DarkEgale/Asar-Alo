import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './FindCare.css';
import Card from '../../Components/Card/Card';

const FindCare = () => {
  const [searchForm, setSearchForm] = useState({
    branch: '',
    specialization: '',
    date: '',
    doctorName: ''
  });

  const handleInputChange = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchForm);
    // Handle search logic here
  };

  return (
    <div className="find-care-page">
      <div className="page-container_findcare">
        <h1>Find Your Care</h1>
        <p>Search for doctors, specialists, and healthcare services in your area.</p>

        <div className="search-section">
          <form onSubmit={handleSubmit} className="search-form">
            <div className="form-row">
              <Input
                type="select"
                name="branch"
                placeholder="Select Branch"
                value={searchForm.branch}
                onChange={handleInputChange}
                options={[
                  { label: 'Main Center', value: 'main' },
                  { label: 'Uptown', value: 'uptown' },
                  { label: 'Downtown', value: 'downtown' }
                ]}
              />
              <Input
                type="select"
                name="specialization"
                placeholder="Specialization"
                value={searchForm.specialization}
                onChange={handleInputChange}
                options={[
                  { label: 'Cardiology', value: 'cardiology' },
                  { label: 'Radiology', value: 'radiology' },
                  { label: 'Neurology', value: 'neurology' },
                  { label: 'Orthopedics', value: 'orthopedics' },
                  { label: 'Dermatology', value: 'dermatology' }
                ]}
              />
            </div>
            <div className="form-row">
              <Input
                type="date"
                name="date"
                placeholder="Preferred Date"
                value={searchForm.date}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="doctorName"
                placeholder="Doctor Name (Optional)"
                value={searchForm.doctorName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-actions">
              <Button variant="primary" type="submit">Search Doctors</Button>
            </div>
          </form>
        </div>

        <div className="quick-links">
          <h2>Quick Access</h2>
          <div className="links-grid">
            
              <Card
                image=""
                content="Comprehensive health checkups"
                title="Health Package"
                description="Comprehensive health checkups"
                linkText="View Package"
              />
            
              <Card
              image=""
              content="Medical Consultation Services"
              title="Consultation"
              description="Medical Consultation Services"
              linkText="View Package"
              />
            
            <Card
              image=""
              content="Emergency Services"
              title="Emergency"
              description="Emergency Contacts and Services"
              linkText="View Package"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCare;