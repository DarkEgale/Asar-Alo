import React from 'react'
import styles from './Input.module.css'

export default function Input({ type = 'text', placeholder = '', options = [], value, onChange, ...rest }){
  if(type === 'select'){
    return (
      <div className={styles.field}>
        <select className={styles.select} value={value} onChange={onChange} {...rest}>
          <option value="">{placeholder || 'Select'}</option>
          {options.map((opt)=> (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>{opt.label ?? opt}</option>
          ))}
        </select>
      </div>
    )
  }

  if(type === 'textarea'){
    return (
      <div className={styles.field}>
        <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={onChange} {...rest}></textarea>
      </div>
    )
  }

  return (
    <div className={styles.field}>
      <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
    </div>
  )
}
