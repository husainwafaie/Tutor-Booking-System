import React, { useState } from 'react';
import '../styles/SearchSubject.css';

const SearchSubject = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const subjects = [
        'Mathematics', 'Physics', 'Chemistry', 'Biology',
        'English', 'History', 'Computer Science'
    ];

    return (
        <div className="search-subject-container">
            <h2>Find Your Subject</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for a subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="subjects-grid">
                {subjects
                    .filter(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((subject, index) => (
                        <div key={index} className="subject-card">
                            <h3>{subject}</h3>
                            <button className="btn btn-secondary">Select</button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchSubject;
