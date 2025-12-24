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
                <div className="nav-logo">Logo</div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/find-care" onClick={() => setMenuOpen(false)}>Find Care</Link></li>
                    <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )

}