
import { ExternalLink, GraduationCap, HomeIcon, LogIn, LogOut, MessageSquare } from 'lucide-react';
import { useContext } from 'react';
import { AuthContext } from '../providers/Context';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import axios from 'axios';

const SimpleNavbar = () => {

  const context = useContext(AuthContext)
  // console.log(context)
  if (!context) {
    return "error"
  }

  const frontendUrl = import.meta.env.VITE_BACKEND_URL;

  if (!frontendUrl) {
    throw new Error("VITE_FRONTEND_URL is not defined in .env");
  }

  const { googleLogin, user: currentUser, logoutUser } = context
  const hnadleLogin = () => {
    // console.log("object")
    googleLogin()
      .then(async (googleRes) => {
        if (googleRes) {
          // console.log(googleRes.user)
          const data = {
            name: googleRes.user.displayName,
            email: googleRes.user.email,
            phone: null,
            role: "USER"
          }

          const response = await axios.post(`${frontendUrl}/create-user`, data)
          // console.log(response)
          if (response?.data?.success) {

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logged in successfully",
              showConfirmButton: false,
              timer: 1500
            });
          }

        }
      })
  }
  const handleLogout = () => {
    // console.log("object")
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the logout logic here, such as clearing tokens or session
        logoutUser()
          .then(() => {
            console.log("dd")
          })
        Swal.fire({
          title: 'Logged out!',
          text: 'You have been logged out successfully.',
          icon: 'success'
        })
      }
    });


  }
  // login-logout--> firebase 
  //frontend --> React.js (js er framwork)
  // Tailwind css
  // backend --> express (Node.js framework)
  // database --> mongodb


  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left side - Logo + Website Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <GraduationCap className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="text-xl font-bold text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
              JU Admission Portal
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">

            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 border-l-2 border-r-2"
            >
              <HomeIcon className="h-4 w-4" />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              to="/feedback"
              className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 border-l-2 border-r-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="font-medium">Feedback</span>
            </Link>

            <Link
              to="/quick-links"
              className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 border-l-2 border-r-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="font-medium">Quick Links</span>
            </Link>

            <Link
              to="/questions/faq"
              className="text-white hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 border-l-2 border-r-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="font-medium">Faq</span>
            </Link>

          </div>

          {/* Right side - Login Button */}
          <div className="flex items-center">
            {
              !currentUser ?
                <button onClick={hnadleLogin} className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </button> :
                <div className='flex gap-4'>
                  <button className="bg-gray-100 text-black hover:bg-blue-200  px-6 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    {/* <User className="h-4 w-4" /> */}
                    {/* <UserRound className="h-4 w-4" /> */}
                    <span className='border bg-blue-950 px-2 rounded-full text-white'>{currentUser?.email?.slice(0, 1).toUpperCase()}</span>
                  </button>
                  <button onClick={handleLogout} className="bg-gray-100 text-black hover:bg-blue-200  px-6 py-2 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                    {/* <User className="h-4 w-4" /> */}
                    {/* <UserRound className="h-4 w-4" /> */}
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
            }
          </div>
        </div>
      </div>
    </nav >
  );
};

export default SimpleNavbar;