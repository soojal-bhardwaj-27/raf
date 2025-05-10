import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';

const Click = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
          },
          particles: {
            color: { value: '#ffffff' },
            move: { speed: 1 },
            number: { value: 50 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Glowing blobs */}
      <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-pink-500/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-2/3 right-[-100px] w-[500px] h-[500px] bg-purple-400/20 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image Column Left */}
        <Tilt
          glareEnable
          glareMaxOpacity={0.25}
          glareColor="#ffffff"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          className="w-full md:w-2/5 h-auto"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-3xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-lg border border-white/20 p-4 shadow-2xl"
          >
            <img
              src="/ambuja.png"
              alt="Placed Student"
              className="w-full h-[450px] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        </Tilt>

        {/* Text Column Right */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Placed with Ambuja Cement Foundation
            </h2>
            <div className="absolute left-0 -bottom-2 w-20 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"
          >
            “I'm Delighted to Share…”
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-200 leading-relaxed max-w-2xl"
          >
            I’m delighted to share that I have been placed with <strong>Ambuja Cement Foundation</strong>.
            <br /><br />
            This achievement wouldn't have been possible without the support of <strong>Raffles University</strong>.
            Thank you for the constant guidance, learning environment, and encouragement.
            <br /><br />
            Proud to be a part of Raffles and grateful for this opportunity!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Click;
