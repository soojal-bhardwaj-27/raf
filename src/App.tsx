import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quality from './components/Quality';
import Click from './components/click';
import Campus from './components/Campus';
import SliderVideo from './components/slidervideo';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import Research from './components/research';
import Placements from './components/Placements';
import Click2 from './components/click2';
import Accreditations from './components/Accreditations';
import Inspiration from './components/inspiration';
import LifeAtRU from './components/LifeAtRU';
import AdmissionProcess from './components/AdmissionProcess';
import Apply from './components/Apply';
import Footer from './components/Footer';
import FloatingEnquiryForm from './components/FloatingEnquiryForm';
import Loader from './components/Loader';
import SideNavbar from './components/SideNavbar'; // Import the SideNavbar component

// School page imports
import Engineering from './pages/Engineering';
import Law from './pages/Law';
import Pharmacy from './pages/Pharmacy';
import Management from './pages/Management';
import BasicAppliedScience from './pages/BasicAppliedScience';
import Agriculture from './pages/Agriculture';
import Humi from './pages/humanities';

// Styles
import './styles/globals.css';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Define paths where the SideNavbar should be shown
  const schoolPaths = [
    '/engineering',
    '/law',
    '/pharmacy',
    '/management',
    '/basic-applied-science',
    '/agriculture',
    '/design',
  ];

  const showSideNavbar = schoolPaths.includes(location.pathname);

  useEffect(() => {
    // Set document title
    document.title = "Raffles University - Shaping Tomorrow's Leaders";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Raffles University is a premier educational institution offering world-class programs in business, engineering, medicine, arts, and more. Apply now for 2025 admissions.';
    document.head.appendChild(metaDescription);

    // Cleanup function to remove meta tag on unmount
    return () => {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        document.head.removeChild(meta);
      }
    };
  }, []);

  useEffect(() => {
    // Simulate loading for page transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust loading time as needed
    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger loading on path change

  const handleNavLinkClick = () => {
    // This function can be used for any additional logic when a nav link is clicked
    // For example, logging or analytics.
  };

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!showSideNavbar && <Navbar onNavLinkClick={handleNavLinkClick} />}
      {showSideNavbar && <SideNavbar onNavLinkClick={handleNavLinkClick} />}
      
      <main className={showSideNavbar ? 'ml-64' : ''}> {/* Add margin-left to main content when side navbar is present */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Quality />
              <Campus />
              <SliderVideo />
              <Click />
              <Testimonials />
              <Facilities />
              <Research />
              <Placements />
              <Click2 />
              <Accreditations />
              <Inspiration />
              <LifeAtRU />
              <AdmissionProcess />
              <Apply />
            </>
          } />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/law" element={<Law />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/management" element={<Management />} />
          <Route path="/basic-applied-science" element={<BasicAppliedScience />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/humanities" element={<Humi />} />
          {/* Add more routes for other pages if necessary */}
        </Routes>
      </main>
      {!showSideNavbar && <Footer />}
      <FloatingEnquiryForm />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
