import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="page-container">
        
        <div className="contact-content">
         
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help you with any questions or concerns.</p>
            <div className="contact-details">
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>123 Medical Center Drive<br />Healthcare City, HC 12345</p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@asaralo.com</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Hours</h3>
                <p>Mon-Fri: 8AM-8PM<br />Sat-Sun: 9AM-5PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                type="textarea"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button variant="primary" type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;