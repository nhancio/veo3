import React from 'react';
import { useAuth } from '../utils/useAuth';

const Login = () => {
  const { login, loading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900/80 p-10 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Sign in to VeoAI</h1>
        <p className="text-lg text-gray-400 mb-8">Please log in with Google to continue.</p>
        <button
          onClick={login}
          disabled={loading}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-full font-semibold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
};

export default Login; 