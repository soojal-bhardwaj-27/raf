import { motion } from 'framer-motion';

const inspirationalFigures = [
  {
    name: "Entrepreneurship",
    role: "Business Leaders",
    description: "Learn from visionary entrepreneurs who transformed ideas into global enterprises.",
    image: "/art.webp",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Technology",
    role: "Tech Innovators",
    description: "Discover insights from pioneers who revolutionized the digital landscape.",
    image: "/aditi.webp",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Social Impact",
    role: "Change Makers",
    description: "Be inspired by leaders who created lasting social transformation.",
    image: "/Group.webp",
    color: "from-pink-500 to-orange-500"
  },
  {
    name: "Education",
    role: "Mentors & Teachers",
    description: "Gain wisdom from educators who shape minds and inspire generations.",
    image: "/edu.webp",
    color: "from-green-400 to-blue-500"
  },
  {
    name: "Arts & Culture",
    role: "Creative Icons",
    description: "Explore the stories of artists and cultural icons who spark imagination.",
    image: "/artculture.webp",
    color: "from-yellow-400 to-pink-500"
  },
  {
    name: "Healthcare",
    role: "Medical Heroes",
    description: "Appreciate the dedication of healthcare professionals saving lives every day.",
    image: "/health.webp",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Environment",
    role: "Eco Warriors",
    description: "Learn from those championing sustainability and protecting our planet.",
    image: "/eco.webp",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Sports",
    role: "Athletes & Coaches",
    description: "Feel the passion of athletes who inspire discipline and determination.",
    image: "/sports.webp",
    color: "from-indigo-500 to-blue-700"
  }
];

const Inspiration = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get Inspiration From Your Icons
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Who Have Changed The World
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            PUTalks Sessions with the most prominent figures and key personalities across multiple fields
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {inspirationalFigures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/10"
            >
              {/* Background Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${figure.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
              {/* Image */}
              <img src={figure.image} alt={figure.name} className="absolute inset-0 object-cover w-full h-full opacity-20 mix-blend-overlay" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between min-h-[350px]">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{figure.name}</h3>
                  <p className="text-md font-semibold text-gray-200 mb-2">{figure.role}</p>
                  <p className="text-gray-100 text-sm leading-relaxed">{figure.description}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white font-semibold hover:bg-white/30 transition-colors duration-300"
                >
                  Join Session
                </motion.button>
              </div>

              {/* Glow */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
