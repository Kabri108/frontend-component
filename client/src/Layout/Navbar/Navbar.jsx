import { useState, useEffect } from "react";
import { FaHome, FaUserCircle, FaSun, FaMoon, FaQuestionCircle, FaReact } from "react-icons/fa";

// Logo as a React component
const Logo = () => {
  return (
    <div className="flex items-center space-x-2 text-3xl font-extrabold tracking-tight">
      {/* React Icon with Animation */}
      <FaReact className="text-rose-500 animate-spin-slow" />
      
      {/* Gradient Text for 'React' */}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-yellow-600">
        React
      </span>
      
      {/* Regular text for 'Logo' */}
      <span className="text-gray-800 dark:text-white drop-shadow-lg text-2xl">
        Component
      </span>
    </div>
  );
};


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode class on initial render
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`w-full sticky top-0 z-50 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"} transition-all`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:flex space-x-8 ml-10">
              <a href="#" className="text-gray-800 dark:text-white flex items-center">
                <FaHome className="mr-1" /> Home
              </a>
              <a href="#" className="text-gray-800 dark:text-white flex items-center">
                About
              </a>
              <a href="#" className="text-gray-800 dark:text-white flex items-center">
                <FaQuestionCircle className="mr-1" /> Interview Questions
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-white mr-4">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <FaUserCircle className="text-gray-800 dark:text-white text-2xl" />
            <button onClick={toggleMenu} className="ml-4 md:hidden text-gray-800 dark:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-gray-800 dark:text-white">
            Home
          </a>
          <a href="#" className="block text-gray-800 dark:text-white">
            About
          </a>
          <a href="#" className="block text-gray-800 dark:text-white">
            Interview Questions
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
