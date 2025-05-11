import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    title: "Choose Your Program",
    description: "Browse our comprehensive range of undergraduate and postgraduate programs to find the one that aligns with your career goals.",
  },
  {
    title: "Check Eligibility",
    description: "Review the academic requirements, entrance examinations, and other criteria for your chosen program.",
  },
  {
    title: "Submit Application",
    description: "Complete the online application form and upload all required documents through our secure portal.",
  },
  {
    title: "Entrance Test & Interview",
    description: "Take the program-specific entrance examination and attend an interview (if applicable).",
  },
  {
    title: "Receive Offer Letter",
    description: "Successful candidates will receive an official offer letter detailing the next steps.",
  },
  {
    title: "Complete Enrollment",
    description: "Pay the required fees and complete the enrollment process to secure your place at Raffles University.",
  },
];

const AdmissionProcess = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="process" 
      className="py-24 relative bg-gray-50 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/groupimg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content with relative positioning */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Admission Process
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Our streamlined admission process is designed to identify motivated and talented students from around the world. Follow these steps to join our diverse community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-md transition-all duration-500 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-primary/10 text-primary font-semibold rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 max-w-4xl mx-auto transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Key Admission Dates</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-accent">Fall 2025 Intake</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Application Opening</span>
                        <span className="text-gray-300 text-sm">November 15, 2024</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Early Decision Deadline</span>
                        <span className="text-gray-300 text-sm">January 10, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Regular Application Deadline</span>
                        <span className="text-gray-300 text-sm">March 31, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Classes Commence</span>
                        <span className="text-gray-300 text-sm">August 15, 2025</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-accent">Spring 2026 Intake</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Application Opening</span>
                        <span className="text-gray-300 text-sm">June 1, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Early Decision Deadline</span>
                        <span className="text-gray-300 text-sm">August 15, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Regular Application Deadline</span>
                        <span className="text-gray-300 text-sm">October 31, 2025</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-white font-medium">Classes Commence</span>
                        <span className="text-gray-300 text-sm">January 15, 2026</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;