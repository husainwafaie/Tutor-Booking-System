import React, { useState } from 'react';
import '../styles/SearchTutor.css';

const SearchTutor = () => {
    const [filters, setFilters] = useState({
        subject: '',
        availability: '',
        rating: ''
    });

    const mockTutors = [
        {
            id: 1,
            name: 'John Doe',
            subject: 'Mathematics',
            rating: 4.5,
            availability: 'Weekdays'
        },
        // Add more mock tutors
    ];

    return (
        <div className="search-tutor-container">
            <h2>Find a Tutor</h2>
            <div className="filters-section">
                <select
                    value={filters.subject}
                    onChange={(e) => setFilters({...filters, subject: e.target.value})}
                >
                    <option value="">Select Subject</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    {/* Add more subjects */}
                </select>
                <select
                    value={filters.availability}
                    onChange={(e) => setFilters({...filters, availability: e.target.value})}
                >
                    <option value="">Availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                </select>
            </div>
            <div className="tutors-grid">
                {mockTutors.map(tutor => (
                    <div key={tutor.id} className="tutor-card">
                        <h3>{tutor.name}</h3>
                        <p>Subject: {tutor.subject}</p>
                        <p>Rating: {tutor.rating}/5</p>
                        <p>Available: {tutor.availability}</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchTutor;
