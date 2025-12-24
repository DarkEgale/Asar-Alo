import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './FindCare.css';

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
      <div className="page-container">
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
            <div className="link-card">
              <h3>Emergency Care</h3>
              <p>24/7 emergency services available</p>
              <Button variant="secondary">Call Now</Button>
            </div>
            <div className="link-card">
              <h3>Book Appointment</h3>
              <p>Schedule your visit online</p>
              <Button variant="secondary">Book Now</Button>
            </div>
            <div className="link-card">
              <h3>Health Packages</h3>
              <p>Comprehensive health checkups</p>
              <Button variant="secondary">View Packages</Button>
            </div>
            <div className="link-card">
              <h3>Test Results</h3>
              <p>Check your test results online</p>
              <Button variant="secondary">View Results</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCare;