import { Building2, Users, TrendingUp } from 'lucide-react';
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
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Dell_EMC_logo.svg/150px-Dell_EMC_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/150px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png",
];

const Placements = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="placements"
      className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden"
      ref={ref}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-purple-600/30 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">Placement Excellence</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-lg">
            Our industry tie-ups and record-breaking placements show our dedication to student futures.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 border border-purple-600 p-6 rounded-2xl shadow-md backdrop-blur-md transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <stat.icon className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-300 mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className={`rounded-3xl p-10 bg-gradient-to-tr from-white/5 via-white/10 to-white/5 backdrop-blur-lg border border-purple-700/30 shadow-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-12">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
            {topRecruiters.map((logo, index) => (
              <div
                key={index}
                className="group relative bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md border border-purple-400/10"
              >
                <img
                  src={logo}
                  alt={`Recruiter ${index + 1}`}
                  className="w-full max-h-12 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
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
