import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const programs = [
  {
    id: 1,
    title: "Business Management",
    description: "Develop business acumen and leadership skills required to excel in today's dynamic global marketplace.",
    courses: ["BBA", "MBA", "Executive MBA", "Ph.D in Management"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Engineering & Technology",
    description: "Cutting-edge programs designed to foster innovation and technical excellence across various engineering disciplines.",
    courses: ["Computer Science", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Medicine & Healthcare",
    description: "World-class medical programs focusing on clinical excellence, research, and patient-centered care.",
    courses: ["MBBS", "Nursing", "Physiotherapy", "Healthcare Management"],
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Arts & Humanities",
    description: "Explore human culture, history, and creativity through our diverse arts and humanities programs.",
    courses: ["Liberal Arts", "Fine Arts", "Psychology", "Media & Communication"],
    image: "https://images.pexels.com/photos/7191991/pexels-photo-7191991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="programs" 
      className="py-24 bg-white relative"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Academic Excellence & Innovation
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Discover our diverse range of academic programs designed to prepare you for success in your chosen field. Our curriculum combines theoretical knowledge with practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-primary">Our Programs</h3>
              <div className="space-y-3">
                {programs.map(program => (
                  <button
                    key={program.id}
                    onClick={() => setActiveProgram(program.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all hover:bg-primary/5 ${
                      activeProgram === program.id 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'text-gray-700'
                    }`}
                  >
                    {program.title}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <a 
                  href="#apply" 
                  className="flex items-center text-primary font-medium hover:text-accent transition-colors"
                >
                  View All Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {programs.map(program => (
              <div 
                key={program.id}
                className={`transition-all duration-500 transform ${
                  activeProgram === program.id 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute -translate-x-10 pointer-events-none'
                }`}
              >
                {activeProgram === program.id && (
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{program.title}</h3>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800">Popular Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.courses.map((course, idx) => (
                            <span 
                              key={idx} 
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <a 
                          href="#apply" 
                          className="btn-primary inline-flex items-center group"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a 
                          href="#" 
                          className="text-primary hover:text-accent font-medium transition-colors"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;