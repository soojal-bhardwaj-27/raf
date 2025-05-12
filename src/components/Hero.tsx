import { ArrowRight } from 'lucide-react';
import PlacementsSection from './PlacementsSection';
import { useEffect, useState } from 'react';
import AdmissionPopup from './AdmissionPopup';

interface SlideType {
  image: string;
  content: string;
}

const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides: SlideType[] = [
    { 
      image: '/campus_img.png', 
      content: 'Welcome to Raffles University - Shaping Future Leaders'
    },
    { 
      image: '/alabar.png', 
      content: 'Welcome to Raffles University - Shaping Future Leaders'
    },
    { 
      image: '/convo.jpg', 
      content: 'Celebrating Academic Excellence at Our Convocation Ceremony'
    },
    { 
      image: '/good.png', 
      content: 'Empowering Education for a Better Tomorrow'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Slider with enhanced transitions */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img
              src={slide.image}
              alt={slide.content}
              className="w-full h-full object-cover transition-transform duration-1000"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-6 transform transition-all duration-1000">
              <p className="text-xl text-center font-semibold">{slide.content}</p>
            </div>
          </div>
        ))}

        {/* Admission Popup */}
        <AdmissionPopup />

        {/* Dynamic overlay that changes with slides */}
        <div className={`absolute inset-0 bg-blue-900 opacity-40 mix-blend-multiply z-10 transition-opacity duration-1000`} />

        {/* Hero Content with animations - only shown for the first slide */}
        <div className={`relative z-30 px-10 pt-28 max-w-2xl transform transition-all duration-1000 ${currentSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 uppercase animate-fadeIn">
            A Launchpad for
          </h2>
          <h1 className="mt-2 text-6xl md:text-7xl font-extrabold text-white uppercase leading-tight animate-slideIn">
            Global Impact
          </h1>
          <p className="mt-6 text-xl text-white animate-fadeIn delay-200">
            Step into a World of Opportunity
          </p>
          <div className="mt-6 inline-block bg-yellow-300 text-black font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Diploma, UG and PG program
          </div>
          <button 
            type="button"
            className="mt-4 ml-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Apply Now <ArrowRight className="inline w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Enhanced Slider Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 transform ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}        
        </div>

        {/* Accreditation Logos with animations */}
        <div className="absolute top-10 right-10 flex flex-col items-end z-30">
          {[
            { src: '/pharmacy bar.png', alt: 'Pharmacy Council of India' },
            { src: '/icar.png', alt: 'ICAR Accreditation' },
            { src: '/ugc.png', alt: 'UGC Logo' },
            { src: '/councilbar.png', alt: 'Bar Council of India' },
          ].map((logo, index) => (
            <div
              key={index}
              className={`w-24 h-24 rounded-full border-4 border-white bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] overflow-hidden mb-6 ${index % 2 !== 0 ? 'ml-6' : ''} transform transition-all duration-500 hover:scale-110`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Placements Section */}
      <PlacementsSection />
    </>
  );
};

export default Hero;
