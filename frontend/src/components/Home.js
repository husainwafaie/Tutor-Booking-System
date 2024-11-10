import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Tutor Booking System</h1>
            <div className="feature-grid">
                <div className="feature-card">
                    <h2>Find a Tutor</h2>
                    <p>Connect with experienced tutors in your subject</p>
                    <button className="btn btn-primary">Search Tutors</button>
                </div>
                {/* Add more feature cards */}
            </div>
        </div>
    );
};

export default Home;
