import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Generate from './pages/Generate';
import MyCreations from './pages/MyCreations';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './utils/useAuth';
import Login from './pages/Login';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/generate" element={<ProtectedRoute><Generate /></ProtectedRoute>} />
            <Route path="/my-creations" element={<ProtectedRoute><MyCreations /></ProtectedRoute>} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;