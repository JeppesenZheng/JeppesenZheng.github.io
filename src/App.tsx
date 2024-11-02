import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import HSRProject from './components/projects/HSRProject';
import LibrarySystemProject from './components/projects/LibrarySystemProject';

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
      </Routes>
    </Router>
  );
}

export default App;
