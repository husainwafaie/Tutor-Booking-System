import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../services/studentService';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getAllStudents();
                setStudents(data);
            } catch (error) {
                console.error('Failed to fetch students');
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name} ({student.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;