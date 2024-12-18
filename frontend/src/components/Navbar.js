import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Tutor Booking System</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/search-subject">Find Subject</Link></li>
                <li><Link to="/search-tutor">Find Tutor</Link></li>
                <li><Link to="/book-appointment">Book Appointment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;