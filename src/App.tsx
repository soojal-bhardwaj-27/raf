import { useEffect } from 'react';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import PlacementsSection from './components/PlacementsSection';
import Quality from './components/Quality';
import Click from './components/click';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Facilities from './components/Facilities';
import Research from './components/research';
import Placements from './components/Placements';
import Click2 from './components/click2';
import Accreditations from './components/Accreditations';
import Inspiration from './components/inspiration';
import AdmissionProcess from './components/AdmissionProcess';
import Apply from './components/Apply';
import Footer from './components/Footer';
import FloatingEnquiryForm from './components/FloatingEnquiryForm';

// Styles
import './styles/globals.css';

function App() {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* <PlacementsSection /> */}
        <Quality />
        <Campus />
        <Click />
        <Testimonials />
        <Facilities />
        <Research />
        <Placements />
        <Click2 />
        <Accreditations />
        <Inspiration />
        <AdmissionProcess />
        <Apply />
      </main>
      <Footer />
      <FloatingEnquiryForm />
    </div>
  );
}

export default App;