import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AboutConference from './pages/AboutConference';
import Downloads2 from './pages/Downloads2';
import CallForPapers from './pages/CallForPapers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-conference" element={<AboutConference />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/registration" element={<div className="p-16 text-center">Registration Page (Coming Soon)</div>} />
            <Route path="/downloads" element={<Downloads2 />} />
            <Route path="/contact" element={<div className="p-16 text-center">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
