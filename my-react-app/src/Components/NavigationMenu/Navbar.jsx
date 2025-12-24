import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/Logo/Asar_Al_logo.png'

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return(
        <nav className="nav_bar">
            <div className="nav-container">
                <div className="nav-logo"><Link to="/"><img src={logo} alt="Asar Alo Logo" /></Link></div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/find-care" onClick={() => setMenuOpen(false)} className='nav_link'>Find Care</Link></li>
                    <li><Link to="/services" onClick={() => setMenuOpen(false)}className='nav_link'>Services</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}className='nav_link'>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}className='nav_link'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )

}