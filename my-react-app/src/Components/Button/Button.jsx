import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant = 'primary', icon, onClick, children, ...rest }){
  const cls = [styles.button, styles[variant]].join(' ')
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
