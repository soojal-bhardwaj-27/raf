import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold">
                RAFFLES
                <span className="text-accent text-xl ml-1">UNIVERSITY</span>
              </a>
            </div>
            <p className="text-gray-400 mb-6">
              A world-class institution committed to academic excellence, innovation, and global education since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-gray-400 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#campus" className="text-gray-400 hover:text-accent transition-colors">Campus Life</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-accent transition-colors">Faculty & Research</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Events & News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Library Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">International Students</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Alumni Network</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  123 University Avenue<br />
                  New York, NY 10012<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-accent mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+1 (555) 987-6543</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-accent mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@raffles.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Raffles University. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;