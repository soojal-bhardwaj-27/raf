import { useInView } from '../hooks/useInView';

const qualityPoints = [
  {
    id: 1,
    title: "NAAC A++ Accreditation",
    description: "First University in India to Become The First Private University in India to Receive a NAAC A++ Accreditation.",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Top 5% Universities",
    description: "Ranked among the top 5% universities globally for academic excellence and innovation.",
    icon: "📈"
  },
  {
    id: 3,
    title: "Research Excellence",
    description: "Leading research output with state-of-the-art facilities and global collaborations.",
    icon: "🔬"
  }
];

const Quality = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(9, 228, 64, 0.2)_0%,transparent_60%)]" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      {/* Inner-cut corners at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[calc(50%-3rem)] h-full bg-white/5" />
        <div className="absolute bottom-0 right-0 w-[calc(50%-3rem)] h-full bg-white/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/5 rotate-45 -translate-y-1/2" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
              A Guarantee of the Finest Quality in Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse" />
          </div>

          {/* Quality points grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24"> {/* Added margin-bottom for inner-cut corner spacing */}
            {qualityPoints.map((point, index) => (
              <div
                key={point.id}
                className={`transform transition-all duration-700 delay-${index * 200} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 group hover:-translate-y-2">
                  <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents with inner-cut style */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-br-[100px] animate-pulse" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-br-[100px] animate-pulse translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-[100px] animate-pulse translate-y-1/2" />
    </section>
  );
};

export default Quality;