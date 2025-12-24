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
                    <li><a href="#home">Find Care</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )

}