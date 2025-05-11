import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TabContent {
  title: string;
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
}

const tabs = [
  {
    id: 'tech-labs',
    label: 'Tech Labs',
    content: {
      title: 'State-of-the-Art Technology Labs',
      cards: [
        {
          image: '/aditi.webp',
          title: 'AI & Machine Learning Lab',
          description: 'Advanced computing facilities for artificial intelligence research.'
        },
        {
          image: '/Group.webp',
          title: 'IoT Workshop',
          description: 'Hands-on experience with latest IoT devices and sensors.'
        },
        // Add more cards as needed
      ]
    }
  },
  {
    id: 'research',
    label: 'Research Facilities',
    content: {
      title: 'Research & Innovation Centers',
      cards: [
        {
          image: '/campus_img.png',
          title: 'Biotechnology Center',
          description: 'Modern labs for cutting-edge biotech research.'
        },
        {
          image: '/clicks.png',
          title: 'Nanotechnology Lab',
          description: 'Advanced equipment for nanoscale research.'
        },
        // Add more cards as needed
      ]
    }
  },
  // Add more tabs as needed
];

const LifeAtRU = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white overflow-hidden">
      {/* Hero Section with Birds */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/campus_img.png"
          alt="RU Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Life At <span className="text-yellow-400">RU</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Here you get to experience the most enriching and vibrant campus life while you learn
            </motion.p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-all ${activeTab === tab.id ? 'bg-yellow-400 text-black' : 'text-white hover:bg-white/10'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode='wait'>
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">{tab.content.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tab.content.cards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-gray-300">{card.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LifeAtRU;