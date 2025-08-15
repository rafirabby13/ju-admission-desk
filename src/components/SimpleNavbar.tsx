
import { GraduationCap, LogIn } from 'lucide-react';

const SimpleNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo + Website Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <GraduationCap className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="text-xl font-bold text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
              JU Admission Portal
            </div>
          </div>

          {/* Right side - Login Button */}
          <div className="flex items-center">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;