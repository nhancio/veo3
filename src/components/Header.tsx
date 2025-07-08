import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Video, CreditCard } from 'lucide-react';
import { useAuth } from '../utils/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const { user, profile, loading, login, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Video className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-300/30 transition-all duration-300"></div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VeoAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium transition-all duration-300 hover:text-cyan-400 ${
                isActive('/') ? 'text-cyan-400 glow-text' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/generate" 
              className={`text-lg font-medium transition-all duration-300 hover:text-cyan-400 ${
                isActive('/generate') ? 'text-cyan-400 glow-text' : 'text-gray-300'
              }`}
            >
              Generate
            </Link>
            <Link 
              to="/my-creations" 
              className={`text-lg font-medium transition-all duration-300 hover:text-cyan-400 ${
                isActive('/my-creations') ? 'text-cyan-400 glow-text' : 'text-gray-300'
              }`}
            >
              My Creations
            </Link>
            <Link 
              to="/pricing" 
              className={`text-lg font-medium transition-all duration-300 hover:text-cyan-400 ${
                isActive('/pricing') ? 'text-cyan-400 glow-text' : 'text-gray-300'
              }`}
            >
              Pricing
            </Link>
            <div className="flex items-center space-x-4 ml-8">
              {user && profile && (
                <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CreditCard className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-semibold text-cyan-400">{profile.credits ?? profile.credit_balance}</span>
                  <span className="text-gray-400">credits</span>
                </div>
              )}
              {!user && !loading && (
                <button
                  onClick={login}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 glow-button"
                >
                  Login
                </button>
              )}
              {user && !loading && (
                <div className="relative">
                  <button
                    onClick={() => setShowProfile((v) => !v)}
                    className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700 px-4 py-2 rounded-full hover:border-cyan-400 transition-all"
                  >
                    {profile?.avatar_url && (
                      <img src={profile.avatar_url} alt="avatar" className="w-8 h-8 rounded-full border border-cyan-400" />
                    )}
                    <span className="text-gray-200 font-medium">Profile</span>
                  </button>
                  {showProfile && (
                    <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4 z-50">
                      <div className="flex flex-col items-center mb-4">
                        {profile?.avatar_url && (
                          <img src={profile.avatar_url} alt="avatar" className="w-16 h-16 rounded-full border-2 border-cyan-400 mb-2" />
                        )}
                        <span className="text-lg font-bold text-white">{profile?.full_name}</span>
                        <span className="text-gray-400 text-sm">{user.email}</span>
                      </div>
                      <div className="flex flex-col items-center mb-4">
                        <span className="text-cyan-400 font-semibold">Credits: {profile.credits ?? profile.credit_balance}</span>
                      </div>
                      <button
                        onClick={logout}
                        className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-black px-4 py-2 rounded-full font-semibold hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link to="/" className="block text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/generate" className="block text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors">Generate</Link>
              <Link to="/my-creations" className="block text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors">My Creations</Link>
              <Link to="/pricing" className="block text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link>
              <div className="pt-4 border-t border-gray-800">
                {user && profile && (
                  <div className="flex items-center space-x-2 mb-4">
                    <CreditCard className="w-5 h-5 text-cyan-400" />
                    <span className="text-lg font-semibold text-cyan-400">{profile.credits ?? profile.credit_balance} credits</span>
                  </div>
                )}
                {!user && !loading && (
                  <button
                    onClick={login}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-3 rounded-full font-semibold"
                  >
                    Login
                  </button>
                )}
                {user && !loading && (
                  <div className="flex flex-col items-center mt-2">
                    <button
                      onClick={() => setShowProfile((v) => !v)}
                      className="flex items-center space-x-2 bg-gray-900/50 border border-gray-700 px-4 py-2 rounded-full hover:border-cyan-400 transition-all w-full justify-center"
                    >
                      {profile?.avatar_url && (
                        <img src={profile.avatar_url} alt="avatar" className="w-8 h-8 rounded-full border border-cyan-400" />
                      )}
                      <span className="text-gray-200 font-medium">Profile</span>
                    </button>
                    {showProfile && (
                      <div className="mt-2 w-full bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4 z-50">
                        <div className="flex flex-col items-center mb-4">
                          {profile?.avatar_url && (
                            <img src={profile.avatar_url} alt="avatar" className="w-16 h-16 rounded-full border-2 border-cyan-400 mb-2" />
                          )}
                          <span className="text-lg font-bold text-white">{profile?.full_name}</span>
                          <span className="text-gray-400 text-sm">{user.email}</span>
                        </div>
                        <div className="flex flex-col items-center mb-4">
                          <span className="text-cyan-400 font-semibold">Credits: {profile.credits ?? profile.credit_balance}</span>
                        </div>
                        <button
                          onClick={logout}
                          className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-black px-4 py-2 rounded-full font-semibold hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;