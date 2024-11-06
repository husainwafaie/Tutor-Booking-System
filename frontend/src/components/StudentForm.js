import React, { useState } from 'react';
import { createStudent } from '../services/studentService';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createStudent({ name, email });
            alert('Student created successfully');
            setName('');
            setEmail('');
        } catch (error) {
            alert('Failed to create student');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;