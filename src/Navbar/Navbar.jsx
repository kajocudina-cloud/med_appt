import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    // React način za upravljanje stanjem (otvoren/zatvoren menu)
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav>
            <div className="nav__logo">
                <a href="/">
                    StayHealthy 
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
                        <title>Doctor With Stethoscope SVG icon</title>
                        <g>
                            <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                            <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                        </g>
                    </svg>
                </a>
                <span>.</span>
            </div>

            <div className="nav__icon" onClick={handleClick}>
                <i className={isActive ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            {/* Dodajemo 'active' klasu ako je isActive true */}
            <ul className={`nav__links ${isActive ? 'active' : ''}`}>
                <li className="link">
                    <a href="/">Home</a>
                </li>
                <li className="link">
                    <a href="#">Appointments</a>
                </li>
                <li className="link">
                    <a href="/signup" className="btn1" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                        Sign Up
                    </a>
                </li>
                <li className="link">
                    <a href="/login">
                        <button className="btn1">Login</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;