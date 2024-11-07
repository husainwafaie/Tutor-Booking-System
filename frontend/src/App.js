import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
    return (
        <Router>
            <div>
                <h1>Tutor Booking System</h1>
                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add-student" element={<StudentForm />} />
                    {/* other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;