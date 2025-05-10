import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "MBA Graduate, Class of 2023",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    content: "Studying at Raffles University was a transformative experience...",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Graduate, Class of 2022",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    content: "The engineering program at Raffles University combines theoretical knowledge...",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Medical Student, Current",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    content: "The medical program at Raffles is rigorous but incredibly rewarding...",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="py-24 relative bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Dynamic background glow */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300">
            Student Success Stories
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto my-6 rounded-full"></div>
          <p className="text-gray-300 text-lg">
            Hear what our students and alumni have to say about their experiences at Raffles University.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[active].id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-[30px] border border-white/20 shadow-xl relative"
              style={{
                clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)"
              }}
            >
              <Quote className="absolute top-6 left-6 text-pink-400 opacity-20 w-16 h-16" />
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-pink-400 shadow-lg"
                />
                <div className="text-center md:text-left">
                  <p className="text-lg text-gray-200 mb-4 italic">
                    "{testimonials[active].content}"
                  </p>
                  <h4 className="text-xl font-semibold text-pink-300">{testimonials[active].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:px-0">
            <button
              onClick={prev}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === i ? 'bg-pink-400 scale-110' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
