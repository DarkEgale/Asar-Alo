import React from 'react'
import styles from './ServiceSection.module.css'
import Card from '../Card/Card'

export default function ServiceSection({ services }){
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Card
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
              onClick={service.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}