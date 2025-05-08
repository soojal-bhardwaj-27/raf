import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FloatingEnquiryForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-x-0' : 'translate-x-full'
    }`}>
      {!isMinimized ? (
        <div className="bg-white rounded-l-lg shadow-xl w-80">
          <div className="bg-primary p-4 rounded-tl-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">Quick Enquiry</h3>
            <button 
              onClick={() => setIsMinimized(true)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              >
                <option value="">Select Course</option>
                <option value="bba">BBA</option>
                <option value="mba">MBA</option>
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
              </select>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 rounded-md transition-colors"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-primary text-white px-6 py-3 rounded-l-full shadow-lg hover:bg-primary/90 transition-colors transform rotate-90 origin-right -translate-x-12"
        >
          Enquire Now
        </button>
      )}
    </div>
  );
};

export default FloatingEnquiryForm;