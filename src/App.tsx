import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import Accreditations from './components/Accreditations';
import AdmissionProcess from './components/AdmissionProcess';
import Apply from './components/Apply';
import Footer from './components/Footer';
import FloatingEnquiryForm from './components/FloatingEnquiryForm';
import './styles/globals.css';

function App() {
  useEffect(() => {
    document.title = "Raffles University - Shaping Tomorrow's Leaders";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Raffles University is a premier educational institution offering world-class programs in business, engineering, medicine, arts, and more. Apply now for 2025 admissions.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Campus />
      <Testimonials />
      <Placements />
      <Accreditations />
      <AdmissionProcess />
      <Apply />
      <Footer />
      <FloatingEnquiryForm />
    </div>
  );
}

export default App;