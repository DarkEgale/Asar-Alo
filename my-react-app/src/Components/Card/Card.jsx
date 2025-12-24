import React from 'react'
import styles from './Card.module.css'
import Button from '../Button/Button'

export default function Card({ image, title, description, linkText, onClick, href }){
  const handleClick = () => {
    if (onClick) onClick()
    else if (href) window.location.href = href
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button variant="outline" onClick={handleClick}>{linkText}</Button>
      </div>
    </div>
  )
}