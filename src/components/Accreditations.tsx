import { useInView } from '../hooks/useInView';
import { Award, CheckCircle } from 'lucide-react';

const accreditations = [
  {
    name: "NAAC A++",
    description: "Highest grade accreditation by National Assessment and Accreditation Council",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/NAAC_logo.png/150px-NAAC_logo.png"
  },
  {
    name: "UGC Approved",
    description: "Recognized by University Grants Commission",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/UGC_India_Logo.png/150px-UGC_India_Logo.png"
  },
  {
    name: "NIRF Ranked",
    description: "Top 50 in National Institutional Ranking Framework",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/NIRF_logo.png/150px-NIRF_logo.png"
  },
  {
    name: "CSIR Affiliated",
    description: "Research collaboration with Council of Scientific & Industrial Research",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/CSIR_logo.png/150px-CSIR_logo.png"
  }
];

const Accreditations = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="accreditations" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Accreditations
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Recognized for excellence by leading educational and research bodies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accreditations.map((accreditation, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl p-6 transition-all duration-500 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={accreditation.logo}
                  alt={accreditation.name}
                  className="h-20 w-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {accreditation.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {accreditation.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-primary rounded-xl overflow-hidden transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Choose a NAAC A++ Accredited University?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    Highest standard of educational excellence and quality assurance
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    Enhanced opportunities for research funding and collaborations
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    Better placement opportunities and industry connections
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">
                    International recognition and academic partnerships
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <Award className="h-24 w-24 text-accent mb-4 mx-auto" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Excellence Recognition
                </h4>
                <p className="text-gray-200">
                  Our accreditations reflect our commitment to academic excellence and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;