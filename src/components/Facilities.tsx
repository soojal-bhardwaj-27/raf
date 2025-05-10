import React from 'react';

interface Facility {
  image: string;
  title: string;
  description: string;
}

const Facilities: React.FC = () => {
  const facilities: Facility[] = [
    {
      image: '/campus_img.png',
      title: 'Annual Degree',
      description: 'Celebrating academic excellence',
    },
    {
      image: '/Group.webp',
      title: 'Competitive Environment',
      description: 'Fostering growth and learning',
    },
    {
      image: '/art.webp',
      title: 'GATE Community',
      description: 'Building future leaders',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Through Our Finest Facilities For Skilling & Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-6 border border-blue-500/30 shadow-xl transition-all hover:shadow-blue-500/30"
            >
              {/* Glowing Border Ring */}
              <div className="relative w-52 h-52 mb-6 rounded-full overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title and Description */}
              <h3 className="text-white text-xl font-bold mb-2">{facility.title}</h3>
              <p className="text-blue-100 text-center text-sm">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
