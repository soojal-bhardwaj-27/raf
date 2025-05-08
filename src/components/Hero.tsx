import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.3;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-primary">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-20 pt-16 transition-all duration-300"
      >
        <div className="max-w-3xl text-white">
          <h5 className="text-accent font-semibold mb-3 tracking-wider text-lg md:text-xl">
            WELCOME TO RAFFLES UNIVERSITY
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shaping Tomorrow's Leaders with Excellence
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
            Join a world-class institution that combines academic rigor, innovative research, and global opportunities to prepare you for success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#apply" 
              className="btn-primary flex items-center justify-center sm:justify-start group"
            >
              Apply for 2025
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#programs" 
              className="btn-secondary flex items-center justify-center sm:justify-start"
            >
              Explore Programs
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-sm mt-1">Programs</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-accent">300+</div>
              <div className="text-sm mt-1">Faculty Members</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-accent">25k+</div>
              <div className="text-sm mt-1">Students</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-sm mt-1">Countries</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,138.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;