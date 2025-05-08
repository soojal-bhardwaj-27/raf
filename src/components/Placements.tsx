import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const placementStats = [
  {
    label: "Highest Package",
    value: "₹42.5 LPA",
    icon: TrendingUp,
  },
  {
    label: "Average Package",
    value: "₹8.2 LPA",
    icon: Building2,
  },
  {
    label: "Companies Visited",
    value: "500+",
    icon: Building2,
  },
  {
    label: "Students Placed",
    value: "95%",
    icon: Users,
  },
];

const topRecruiters = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/150px-Microsoft_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Dell_EMC_logo.svg/150px-Dell_EMC_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/150px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png",
];

const Placements = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="placements" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Placement Excellence
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Our strong industry connections and placement record reflect our commitment to student success and career development.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md transition-all duration-500 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-white rounded-xl p-8 shadow-md transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {topRecruiters.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;