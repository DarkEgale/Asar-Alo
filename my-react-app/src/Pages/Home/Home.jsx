
import React, { useState } from 'react'
import styles from './Home.module.css'
import Navbar from '../../Components/NavigationMenu/Navbar'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import ServiceSection from '../../Components/ServiceSection/ServiceSection'

import cardio from '../../assets/images/cardiologist.jpeg'
import radiology from '../../assets/images/radiologist.jpeg'
import neurology from '../../assets/images/neurologist.jpeg'

export default function Home(){
  const [searchTerm, setSearchTerm] = useState('')
  const [reviewForm, setReviewForm] = useState({ name: '', rating: '', comment: '' })

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
  ]

  const priceList = [

        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
        { name: 'Blood Test', price: '$50' },
    { name: 'X-Ray', price: '$100' },
    { name: 'MRI Scan', price: '$300' },
    { name: 'ECG', price: '$75' },
  ]

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Excellent service and fast results!' },
    { name: 'Jane Smith', rating: 4, comment: 'Very professional staff and clean facility.' }
  ]

  const filteredPrices = priceList.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    console.log('Review submitted:', reviewForm)
    // Reset form
    setReviewForm({ name: '', rating: '', comment: '' })
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1>Comprehensive Diagnostic Care, Close to You</h1>
            <p>Fast, accurate diagnostics with compassionate care — book appointments, find specialists, and get results online.</p>
            <div className={styles.ctaRow}>
              <Button variant="success">Book Appointment</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className={styles.heroCard}>
            <h3>Find a Doctor</h3>
            <form className={styles.searchForm} onSubmit={(e)=>e.preventDefault()}>
              <Input type="select" placeholder="Branch" options={[{label:'Main Center', value:'main'},{label:'Uptown', value:'uptown'}]} />
              <Input type="select" placeholder="Specialization" options={[{label:'Cardiology', value:'cardiology'},{label:'Radiology', value:'radiology'}]} />
              <Input type="text" placeholder="Search doctor by name" />
              <Button variant="primary">Search</Button>
            </form>
            <section className={styles.doctorAppointments}>
                <div className={styles.sectionInner}>
                    <h2>Book an Appointment with Our Doctors</h2>
                    <div className={styles.doctorGrid}>
                        <div className={styles.doctorCard}>
                        <img src={cardio} alt="" />
                            <h4>Prof. Dr. Abdul Wadud Chowdhury</h4>
                            <p>Cardiologist</p>
                            <Button variant="success">Book Now</Button>
                        </div>
                        <div className={styles.doctorCard}>
                          <img src={radiology} alt="" />
                            <h4>Prof.Dr. Sharmin Akhtar Rupa</h4>
                            <p>Radiologist</p>
                            <Button variant="success">Book Now</Button>
                        </div>
                        <div className={styles.doctorCard}>
                          <img src={neurology} alt="" />
                            <h4>Dr. S. M. Monowar Hossain</h4>
                            <p>Neurologist</p>
                            <Button variant="success">Book Now</Button>
                        </div>
                    </div>
                </div>
            </section>

          </div>
        </div>
      </header>

            <section className={styles.testPrices}>
                <div className={styles.sectionprices}>
                    <h2>Diagnostic Test Prices</h2>
                    <div className={styles.searchBar}>
                        <div className={styles.searchContainer}>
                            <Input type="text" placeholder="Search tests..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <Button variant="primary">Search</Button>
                        </div>
                    </div>
                    <div className={styles.priceList}>
                        {filteredPrices.map((item, index) => (
                            <div key={index} className={styles.priceItem}>
                                <span>{item.name}</span>
                                <strong>{item.price}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
      <ServiceSection services={services} />

      <section className={styles.emergency}>
        <div className={styles.emergencyInner}>
          <div className={styles.emergencyContent}>
            <h2>Do you need Emergency Medical Care?</h2>
            <p>Contact our emergency line for immediate assistance.</p>
            <p className={styles.phone}>Call: <strong>+1 (555) 123-4567</strong></p>
            <Button variant="danger">Call Now</Button>
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <div className={styles.sectionInner}>
          <h2>Patient Reviews</h2>
          <div className={styles.reviewList}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <h4>{review.name}</h4>
                <div className={styles.rating}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <div className={styles.reviewForm}>
            <h3>Leave a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <Input type="text" placeholder="Your Name" value={reviewForm.name} onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})} />
              <Input type="select" placeholder="Rating" options={['1', '2', '3', '4', '5']} value={reviewForm.rating} onChange={(e) => setReviewForm({...reviewForm, rating: e.target.value})} />
              <Input type="textarea" placeholder="Your Comment" value={reviewForm.comment} onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})} />
              <Button variant="primary" type="submit">Submit Review</Button>
            </form>
          </div>
        </div>
      </section> 
        </div>
    )
}
