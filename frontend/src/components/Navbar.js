import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-student">Add Student</Link></li>
                {/* more to add*/}
            </ul>
        </nav>
    );
};

export default Navbar;