import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Register from './components/Register';
import SearchSubject from './components/SearchSubject';
import SearchTutor from './components/SearchTutor';
import BookAppointment from './components/BookAppointment';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search-subject" element={<SearchSubject />} />
                    <Route path="/search-tutor" element={<SearchTutor />} />
                    <Route path="/book-appointment" element={<BookAppointment />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;