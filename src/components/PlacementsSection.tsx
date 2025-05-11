import { FC, useEffect, useRef, useState } from 'react';
import Programs from './Programs';


// Constants
const RECRUITERS = '2,200+';
const HIGHEST_PACKAGE = '45.98 Lakhs';

const ASSISTANCE_STEPS: string[] = [
  'Career Development & Training',
  'Industry Collaborations for Upskilling',
  'Campus Drives & Interview Training',
];

const PARTNER_LOGOS: string[] = [
  './cipla.png',
  './daikin.png',
  './genpact.png',
  './havells.png',
  './hdfc.png',
  './hitachi.png',
  './honda.png',
  './yesbank.png',
  './infosys.png',
  './kotak.png',
  './maruti.png',
];

interface AlumniProfile {
  name: string;
  role: string;
  company: string;
  photo: string;
  bgColor: 'red' | 'yellow';
}

const ALUMNI_PROFILES: AlumniProfile[] = [
  { name: 'Gunjan Pandya', role: 'Data Engineer', company: 'Google', photo: '/google.webp', bgColor: 'red' },
  { name: 'Manasi Dalwani', role: 'Data Strategist', company: 'Google', photo: '/assets/manasi.jpg', bgColor: 'yellow' },
  { name: 'Milind Purswani', role: 'Security Engineer', company: 'Amazon', photo: '/assets/milind.jpg', bgColor: 'red' },
  { name: 'Jay Vaidya', role: 'Sr. Cloud Technical Manager', company: 'Amazon', photo: '/assets/jay.jpg', bgColor: 'yellow' },
];

// LogoSlider Component
const LogoSlider: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slideInterval = 2000; // milliseconds
  const logoCount = PARTNER_LOGOS.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const singleLogoWidth = scrollEl.firstChild instanceof HTMLElement
      ? scrollEl.firstChild.offsetWidth + 32 // logo width + space-x-8
      : 0;

    scrollEl.scrollTo({
      left: singleLogoWidth * index,
      behavior: 'smooth',
    });

    if (index >= logoCount) {
      setTimeout(() => {
        scrollEl.scrollTo({ left: 0, behavior: 'auto' });
        setIndex(0);
      }, slideInterval);
    }
  }, [index, logoCount]);

  return (
    <div className="relative overflow-hidden mb-12">
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-hidden"
      >
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, idx) => (
          <div key={idx} className="flex-none w-32 h-20 bg-gray-800/50 rounded-xl p-4 flex items-center justify-center shadow-lg">
            <img src={src} alt={`Logo ${idx}`} className="h-full object-contain filter brightness-110" />
          </div>
        ))}
      </div>
    </div>
  );
};

// AlumniSlider Component
const AlumniSlider: FC = () => {
  const alumniScrollRef = useRef<HTMLDivElement>(null);
  const [alumniIndex, setAlumniIndex] = useState(0);
  const slideInterval = 3000; // milliseconds
  const alumniCount = ALUMNI_PROFILES.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setAlumniIndex((prev) => prev + 1);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollEl = alumniScrollRef.current;
    if (!scrollEl) return;

    const singleCardWidth = scrollEl.firstChild instanceof HTMLElement
      ? scrollEl.firstChild.offsetWidth + 24 // card width + space-x-6
      : 0;

    scrollEl.scrollTo({
      left: singleCardWidth * alumniIndex,
      behavior: 'smooth',
    });

    if (alumniIndex >= alumniCount) {
      setTimeout(() => {
        scrollEl.scrollTo({ left: 0, behavior: 'auto' });
        setAlumniIndex(0);
      }, slideInterval);
    }
  }, [alumniIndex, alumniCount]);

  return (
    <div className="flex gap-12 items-center mb-12">
      {/* Message on the left */}
      <div className="w-1/3 space-y-4">
        <h2 className="text-3xl font-bold text-yellow-400">Join Our Distinguished Alumni</h2>
        <p className="text-lg text-gray-300">Take the first step towards your dream career with our comprehensive placement program.</p>
        <p className="text-lg text-gray-300">Our alumni are making waves at top companies worldwide.</p>
      </div>

      {/* Alumni Cards on the right */}
      <div className="w-2/3 relative overflow-hidden">
        <div
          ref={alumniScrollRef}
          className="flex space-x-6 overflow-hidden"
        >
          {[...ALUMNI_PROFILES, ...ALUMNI_PROFILES].map((person, idx) => {
            const bgClass = person.bgColor === 'red' ? 'bg-red-500 opacity-30' : 'bg-yellow-500 opacity-30';
            return (
              <div key={idx} className="flex-none w-[200px] relative group cursor-pointer overflow-hidden rounded-2xl">
                <div className={`${bgClass} absolute inset-0 transform scale-105`} />
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-[280px] object-cover relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-xl z-20 shadow-lg">
                  <img
                    src={`/${person.company.toLowerCase()}.png`}
                    alt={person.company}
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PlacementsSection: FC = () => (
  <>
    <section 
      className="bg-black text-white py-20 relative -mt-12 mx-[-8%] mb-[-5%]"
      style={{
        clipPath: 'ellipse(100% 40% at 50% 0%), ellipse(100% 40% at 50% 100%)',
        WebkitClipPath: 'ellipse(100% 40% at 50% 0%), ellipse(100% 40% at 50% 100%)',
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)'
      }}
    >
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm text-gray-400 mb-2">After RU What Comes Next?</p>
          <h2 className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Your Impeccable Placement Opportunities
          </h2>
        </div>

        {/* Stats, Award, Assistance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="space-y-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl">
              <span className="text-yellow-400">{RECRUITERS}</span> Recruiters
            </h3>
            <p className="text-gray-300">Ready to provide you with the best job offers</p>
            <h3 className="text-2xl text-yellow-400">{HIGHEST_PACKAGE} Highest Package</h3>
          </div>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/50 p-6 rounded-2xl text-center flex flex-col justify-center backdrop-blur-sm">
            <p className="text-lg">Awarded as the <strong>Best University in placements</strong> by</p>
            <span className="text-yellow-400 font-semibold text-xl mt-2">ASSOCHAM</span>
          </div>
          <div className="space-y-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl text-yellow-400">How We Help Get Hired By The Best?</h3>
            <ul className="space-y-2">
              {ASSISTANCE_STEPS.map((step, idx) => (
                <li key={idx} className="border border-gray-600 rounded-xl px-4 py-2 text-sm hover:border-yellow-400 transition-colors hover:bg-gray-800/30">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logos Slider */}
        <LogoSlider />

        {/* Alumni Cards Slider */}
        <AlumniSlider />
        <Programs />
      </div>
    </section>
  </>
);

export default PlacementsSection;