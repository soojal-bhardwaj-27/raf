import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface NavbarProps {
  onNavLinkClick?: () => void; // Changed to no arguments
}

const Navbar: React.FC<NavbarProps> = ({ onNavLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false);
  const [isSchoolsDropdownOpen, setIsSchoolsDropdownOpen] = useState(false); // State for Schools dropdown
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAdmissionsDropdown = () => {
    setIsAdmissionsDropdownOpen(!isAdmissionsDropdownOpen);
    setIsSchoolsDropdownOpen(false); // Close other dropdowns
  };

  const toggleSchoolsDropdown = () => { // Function to toggle Schools dropdown
    setIsSchoolsDropdownOpen(!isSchoolsDropdownOpen);
    setIsAdmissionsDropdownOpen(false); // Close other dropdowns
  };

  const handleLinkClick = () => { // Changed to no arguments
    if (onNavLinkClick) {
      onNavLinkClick(); // Call without arguments
    }
    setIsMenuOpen(false); // Close mobile menu on link click
    setIsAdmissionsDropdownOpen(false);
    setIsSchoolsDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800" onClick={handleLinkClick}>
          <img src="/logo.png" alt="Raffles University" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={handleLinkClick}>Home</Link>
          
          {/* Admissions Dropdown */}
          <div className="relative">
            <button
              onClick={toggleAdmissionsDropdown}
              className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Admissions <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            {isAdmissionsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <Link to="/admission-process" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Admission Process</Link>
                <Link to="/apply" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Apply Now</Link>
              </div>
            )}
          </div>

          {/* Schools Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSchoolsDropdown}
              className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Schools <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            {isSchoolsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <Link to="/engineering" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Engineering</Link>
                <Link to="/law" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Law</Link>
                <Link to="/pharmacy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Pharmacy</Link>
                <Link to="/management" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Management</Link>
                <Link to="/basic-applied-science" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Basic Applied Science</Link>
                <Link to="/agriculture" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Agriculture</Link>
                <Link to="/design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>humanities</Link>
              </div>
            )}
          </div>

          <Link to="/placements" className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={handleLinkClick}>Placements</Link>
          <Link to="/research" className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={handleLinkClick}>Research</Link>
          <Link to="/contact" className={`text-gray-800 hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={handleLinkClick}>Contact Us</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Home</Link>
          
          {/* Mobile Admissions Dropdown */}
          <div className="relative">
            <button
              onClick={toggleAdmissionsDropdown}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              Admissions <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            {isAdmissionsDropdownOpen && (
              <div className="pl-6">
                <Link to="/admission-process" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Admission Process</Link>
                <Link to="/apply" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Apply Now</Link>
              </div>
            )}
          </div>

          {/* Mobile Schools Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSchoolsDropdown}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              Schools <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            {isSchoolsDropdownOpen && (
              <div className="pl-6">
                <Link to="/engineering" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Engineering</Link>
                <Link to="/law" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Law</Link>
                <Link to="/pharmacy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Pharmacy</Link>
                <Link to="/management" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Management</Link>
                <Link to="/basic-applied-science" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Basic Applied Science</Link>
                <Link to="/agriculture" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Agriculture</Link>
                <Link to="/design" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Design</Link>
              </div>
            )}
          </div>

          <Link to="/placements" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Placements</Link>
          <Link to="/research" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Research</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLinkClick}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;