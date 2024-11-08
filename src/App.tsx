import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import HSRProject from './components/projects/HSRProject';
import LibrarySystemProject from './components/projects/LibrarySystemProject';
import UNSWSkylabsWebsite from './components/projects/UNSWSkylabsWebsite';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project/HSRProject" element={<HSRProject />} />
        <Route path="/project/LibrarySystemProject" element={<LibrarySystemProject />} />
        <Route path="/project/UNSWSkylabsWebsite" element={<UNSWSkylabsWebsite />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
