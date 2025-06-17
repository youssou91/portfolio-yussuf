import React from 'react';
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFund from './pages/NotFund';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/competence" element={<Knowledges />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFund />} />
    </Routes>
  );
}

export default App;
