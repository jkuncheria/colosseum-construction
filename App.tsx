import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import NewHomeConstructionPage from './pages/NewHomeConstruction';
import HomeRemodelingPage from './pages/HomeRemodeling';
import RoofingPage from './pages/Roofing';
import SidingPage from './pages/Siding';
import WindowsPage from './pages/Windows';
import FinancingPage from './pages/Financing';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/new-home-construction" element={<NewHomeConstructionPage />} />
        <Route path="/home-remodeling" element={<HomeRemodelingPage />} />
        <Route path="/roofing" element={<RoofingPage />} />
        <Route path="/siding" element={<SidingPage />} />
        <Route path="/windows" element={<WindowsPage />} />
        <Route path="/financing" element={<FinancingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
