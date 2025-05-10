import React from 'react';
import { useInView } from '../hooks/useInView';

const Research = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Top Left Gradient Corner */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent rounded-full blur-2xl opacity-30 animate-pulse"></div>

      {/* Bottom Right Gradient Corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-purple-600 via-blue-500 to-transparent rounded-full blur-2xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            With Our Facilities For Research & Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Rankings and Stats */}
          <div
            className={`space-y-6 transform transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Ranking Box */}
            <div className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img src="/logo.png" alt="University Logo" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ranked 7th</h3>
                  <p className="text-sm text-blue-100">Among Top Universities</p>
                </div>
              </div>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                <h4 className="text-2xl font-bold text-blue-400">500+</h4>
                <p className="text-sm text-gray-300">Research Publications</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold text-purple-300">320+</h4>
                <p className="text-sm text-gray-200">Research Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column - Funding Graph */}
          <div
            className={`transform transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Research Funding</h3>
              <div className="space-y-4">
                {[
                  { label: '2021', amount: '295 Lakhs', color: 'bg-blue-500' },
                  { label: '2022', amount: '85 Lakhs', color: 'bg-purple-500' },
                  { label: '2023', amount: '173 Lakhs', color: 'bg-indigo-500' },
                  { label: '2024', amount: '63 Lakhs', color: 'bg-cyan-500' },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{item.label}</span>
                      <span className="text-sm font-bold text-white">{item.amount}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{
                          width: inView ? '100%' : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
