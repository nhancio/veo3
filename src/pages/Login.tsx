
import { useAuth } from '../utils/useAuth';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { login, loading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900/80 p-10 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign in to GeminiVeo3</h1>
        <p className="text-lg text-gray-400 mb-8 text-center">A next generation text to video platform</p>
        <button
          onClick={login}
          disabled={loading}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-full font-semibold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? (
            'Loading...'
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <FcGoogle className="w-6 h-6" />
              <span>Sign in with Google</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Login; 