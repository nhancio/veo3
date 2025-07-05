import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Generate from './pages/Generate';
import MyCreations from './pages/MyCreations';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/my-creations" element={<MyCreations />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;