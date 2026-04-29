import React, { useState } from 'react';
import './Navbar.css';
// Importing Link from react-router-dom for internal routing
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to manage the mobile menu toggle (active/inactive)
    const [isActive, setIsActive] = useState(false);

    // Function to handle the click event on the mobile menu icon
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav>
            {/* Navbar Logo section */}
            <div className="nav__logo">
                {/* Use Link component instead of <a> tag for React SPA routing */}
                <Link to="/">
                    StayHealthy 
                    {/* SVG Doctor Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
                        <title>Doctor With Stethoscope SVG icon</title>
                        <g>
                            <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                            <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                        </g>
                    </svg>
                </Link>
                <span>.</span>
            </div>

            {/* Mobile menu icon (hamburger/times) */}
            <div className="nav__icon" onClick={handleClick}>
                <i className={isActive ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            {/* Navigation links - classes are toggled based on isActive state */}
            <ul className={`nav__links ${isActive ? 'active' : ''}`}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li className="link">
                    <Link to="/signup">
                        <button className="btn1">Sign Up</button>
                    </Link>
                </li>
                <li className="link">
                    <Link to="/login">
                        <button className="btn1">Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; // Exporting the component for use in the App component