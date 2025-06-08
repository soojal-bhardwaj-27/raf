import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Ajay Goyal",
    role: "M.Sc (Animal Behaviour), Anglia Ruskin University, Cambridge UK (Batch – 2016–19)",
    image: "/images/ajaygoyal.jpg",
    content: "I want to thank my university for making my career in wildlife. It was a great help and guidance given by my dearest mentor Dr. Ashok Verma Sir. Raffles University has provided a great platform to students for overall learning by organizing different activity. Only I can say that university has the best of the faculty, infrastructure and in all the best of environment. Miss You."
  },
  {
    id: 2,
    name: "Ms. Nishta Acharya",
    role: "Assistant Professor, S. S. Jain Subodh Law College, Jaipur (Batch – 2014–19)",
    image: "/images/nishta.jpg",
    content: "Five years! Today when I look back it seems to have passed by with the blink of an eye. From a law student, who knew very little about the world outside, Raffles nurtured me to bring the best out of me. I believe that Raffles University provides the right academic environment by conducting Debates, Moot Court Competitions, and Conferences. It has given me the unique opportunity to explore the field of law by way of internships with various advocates as well as law firms. Raffles gave me a fantastic education and an association with an impressive roster of faculty who were always available to help. It gave me memories which involve the brilliant, gregarious and company of interesting Professors from whom I had the privilege of acquiring knowledge."
  },
  {
    id: 3,
    name: "Mr. Mohd. Zubair Bhati",
    role: "Pursuing Masters (Batch – 2014–19)",
    image: "/images/momadzubair.jpg",
    content: "Studying in School of Law, Raffles University has been a rewarding experience. All through the five years it trained me to learn advanced concepts, which I can now readily apply to my work, from some of the foremost thinkers—judges, professors, and practitioners. Raffles University gave me a fantastic education and an association with an impressive roster of faculty who were always available to help. I am grateful, to Raffles University which aided me with the best opportunities all through my tenure and helped me grow professionally and personally. I take this opportunity to thank all my faculties, who smoothened the process of shaping my legal career in a perfect way with their constant advice and support! Raffles University has a promising future prospect. A large number of its alumni occupy distinguished positions in the legal profession. A college that has innovated legal education and created new career options along with a straggling green campus which offers students a holistic environment that encourages exposure to social, cultural and physical activities that complement the legal education by the college."
  },
  {
    id: 4,
    name: "Mr. Durgadas Rathore",
    role: "Under training at Officers Training Academy, Chennai (Batch – 2012–17)",
    image: "/images/mrrathore.jpg",
    content: "I am currently doing my training at Officers Training Academy as a Gentleman Cadet to get commissioned into the Indian Army as an Assistant Judge Advocate General. Work of a JAG officer is to take care of legal and judicial matters of the Indian Army. I want to thank my university for making my career in law and I would like to give all the credits to my teachers. Raffles University provides a great platform to students for overall learning by organizing different activities. It offers a good infrastructure, highly qualified faculty, library, single occupancy rooms and good sports facility. It is a great institution and is known for its excellence. In Raffles University individual attention is paid to the students so that overall development of everyone can take place. Flexibility with the requirements of students concerning their education and practical training is the important factor which makes Raffles University an ideal place for learning."
  },
  {
    id: 5,
    name: "Mr. Shashank Mishra",
    role: "M/s Solicis Lex (Batch – 2012–17)",
    image: "/images/shashank.jpg",
    content: "Raffles has a unique feature that it gave me memories which involve the brilliant, gregarious company of interesting Professors from whom I had the privilege of acquiring knowledge. I am grateful to SOL, RUN which aided me with the best opportunities all through my tenure and helped me grow professionally and personally. It is made with Gurukula concept where the ambiance enables a strong bond between teacher and pupil ensuring thereby greater attention to instruction as well as education free of distraction. Faculty members are available on campus 24/7 basis."
  },
  {
    id: 6,
    name: "Mr. Vipin Kumar Sharma",
    role: "Sodexo On-site Services India Pvt. Ltd (ME, Batch – 2014–18)",
    image: "/images/vipin.jpg",
    content: "Raffles University provided me a great opportunity to work with the corporate world. I am placed in United Breweries Pvt. Ltd. I am so happy with this opportunity. I feel fortunate to join School of Engineering & Technology, Raffles University which is located in the heart of the Japanese zone. Being a student of Mechanical Engineering, I got opportunity to gain firsthand experience regularly to visit Japanese industry as also the enormous complexities involved in business & industries in this magnitude. The Japanese companies are leaders in mechanical engineering globally. As a member of Neemrana Industrial Association, the University gives us great opportunities for internship, practical training & placement."
  },
  {
    id: 7,
    name: "Mr. Navin Yadav",
    role: "Sodexo On-site Services India Pvt. Ltd (EE, Batch – 2014–18)",
    image: "/images/naveen.jpg",
    content: "Raffles University provided me a platform to grow and develop myself and my personality. RU helped me in every possible manner. TAP cell arranged various industrial trainings for vocational development and supported me in every placement drive. I am placed in Sodexo On-site Services India Pvt. Ltd."
  },
  {
    id: 8,
    name: "Mr. Akshay Mishra",
    role: "AVCO Engineers Pvt. Ltd (ME, Batch – 2014–18)",
    image: "/images/mishra.jpg",
    content: "I joined as an alumnus of Raffles School of Engineering & Technology. The biggest advantage of joining Raffles was regular visits by Neemrana industry & our exposure, as well as hands-on experience in Mechanical Engineering. Because of the campus proximity to industry, we got ample opportunities to practice and learn."
  },
  {
    id: 9,
    name: "Mr. Ankit Vaishnav",
    role: "AVCO Engineers Pvt. Ltd (ME, Batch – 2014–18)",
    image: "/images/ankit.jpg",
    content: "The placement process was nice and interactive. I especially liked the constant updates and notifications provided by AVCO Engineers Pvt. Ltd. If it’s possible, I would strongly recommend another interactive session to be held by the company. Really waiting to get a response regards. I am grateful to the institution and my teachers who made me what I am today."
  },
  {
    id: 10,
    name: "Mr. Jitesh Maheshwari",
    role: "Talwar Thakore & Associates (Batch – 2012–17)",
    image: "/images/jitesh.jpg",
    content: "I am currently working as an Associate with Talwar Thakore and Associates, one of the best law firms in India with 60–70% foreign clientele. It is one of the most high-paying law firms in India and the prestigious RSG report has recommended it for its expertise across all practice areas. I want to thank my college for making my career in law and I would like to give all the credits to my teachers as it is because of them that I got the chance to work with TT&A. School of Law, Raffles University provides great exposure by organizing different activities helpful for deciding our future field. It offers a blend of learning, amusement and integration of enduring principles. After my journey with this University, I am proud to be a member of it. Raffles University has made me a better person with state-of-the-art infrastructure, erudite faculty, well-stocked libraries, single occupancy rooms with AC, sports areas, mess and canteen."
  },
  {
    id: 11,
    name: "Mr. Manphool Bhadhu",
    role: "Preparing for the Judicial Service (Batch – 2012–17)",
    image: "/images/manpool.jpg",
    content: "I was apprehensive to invest five crucial years here, but little did I know I would embark on a journey that would transform me. From day one, the institution welcomed us with warmth and professionalism. The curriculum is balanced, intensive and yet leaves room for creativity. Raffles School of Law’s fully residential Gurukula concept enables a strong bond between teachers & pupils, ensuring greater attention to instruction. With all I learnt here, I am confident of clearing the Rajasthan Judicial Service."
  },
  {
    id: 12,
    name: "Ms. Anuradha Tandukar",
    role: "Research Associate at IIM, Lucknow (Batch – 2014–16)",
    image: "/images/anuradha.jpg",
    content: "The MBA program at Raffles University has really helped shape my career through its rigorous course outline and experiential learning system. The placement support provided by the ASOM placement cell was exemplary. Two years at Raffles was truly a rich learning experience, which I will forever rejoice and take pride in."
  },
  {
    id: 13,
    name: "Mr. Paritosh Jha",
    role: "Process Associate at Genpact Jaipur (Batch – 2016–19)",
    image: "/images/mrjha.jpg",
    content: "It has been a great experience to be a part of Raffles University. It's difficult to sum up the memories and experiences of three years in a few lines. There is something motivational and special in this environment and infrastructure which made us study and enjoy co-curricular activities. All the faculty and staff members are very helpful and guided us all the time. Different events and sessions boosted my confidence to a great extent. These three years have given me friends for life and unforgettable memories."
  },
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActive(prev => (prev + 1) % testimonials.length);
  const prev = () => setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 relative bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white overflow-hidden"
    >
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
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)" }}
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

          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:px-0">
            <button onClick={prev} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button onClick={next} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? 'bg-pink-400 scale-110' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;