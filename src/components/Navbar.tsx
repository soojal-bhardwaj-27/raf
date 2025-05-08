import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="./logo.png" 
                alt="Raffles University" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#campus" className="nav-link">Campus</a>
            <a href="#faculty" className="nav-link">Faculty</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                Admissions <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2">
                <a href="#process" className="block px-4 py-2 hover:bg-gray-100">Process</a>
                <a href="#eligibility" className="block px-4 py-2 hover:bg-gray-100">Eligibility</a>
                <a href="#fees" className="block px-4 py-2 hover:bg-gray-100">Fees & Scholarships</a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <a 
              href="#apply" 
              className="bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded-full font-medium transition-all"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#programs" className="mobile-nav-link" onClick={toggleMenu}>Programs</a>
            <a href="#campus" className="mobile-nav-link" onClick={toggleMenu}>Campus</a>
            <a href="#faculty" className="mobile-nav-link" onClick={toggleMenu}>Faculty</a>
            <a href="#testimonials" className="mobile-nav-link" onClick={toggleMenu}>Testimonials</a>
            <a href="#process" className="mobile-nav-link" onClick={toggleMenu}>Admissions</a>
            <a 
              href="#apply" 
              className="bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded-full font-medium transition-all text-center"
              onClick={toggleMenu}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;