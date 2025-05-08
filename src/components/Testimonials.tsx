import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "MBA Graduate, Class of 2023",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Studying at Raffles University was a transformative experience. The faculty's expertise and the practical approach to learning equipped me with the skills needed to succeed in my career. The global network I built here continues to be invaluable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Graduate, Class of 2022",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The engineering program at Raffles University combines theoretical knowledge with hands-on experience in state-of-the-art laboratories. The industry partnerships provided me with internship opportunities that led directly to my current position.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Medical Student, Current",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The medical program at Raffles is rigorous but incredibly rewarding. The mentorship from experienced doctors and the clinical exposure we receive from day one is preparing us to be confident healthcare professionals ready to make a difference.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Student Success Stories
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Hear what our students and alumni have to say about their experiences at Raffles University and how it shaped their careers and lives.
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-xl p-8 md:p-12 relative">
                    <Quote className="absolute top-8 left-8 text-primary/10 h-16 w-16" />
                    <div className="text-center md:text-left md:pl-12">
                      <p className="text-gray-700 text-lg mb-8 relative z-10">
                        "{testimonial.content}"
                      </p>
                      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  active === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;