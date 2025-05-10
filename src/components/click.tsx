import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';

const Click = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              }
            }
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: false },
            move: { speed: 1 },
            number: { value: 50 },
            size: { value: { min: 1, max: 3 } }
          }
        }}
      />

      {/* Organic blob behind content */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-yellow-400/20 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Student Speaks
            </h2>
            <div className="absolute left-0 -bottom-2 w-20 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
            className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 leading-tight"
          >
            "I RECEIVED THE FINEST
            <br />
            CAREER TRAINING"
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-200 max-w-2xl"
          >
            "Being at Raffles University not only helped me secure a job but also provided
            exceptional career development opportunities. The training and support
            equipped me with the right skills and competencies to achieve a successful
            placement with a great package at my dream company."
          </motion.p>
        </div>

        {/* Tilted Image Card with White Background */}
        <Tilt
          glareEnable
          glareMaxOpacity={0.3}
          glareColor="#ffffff"
          glarePosition="all"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          className="w-full md:w-1/3"
        >
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-300">
            <motion.img
              src="/nisha.png"
              alt="Student with graduation cap"
              className="w-full object-cover rounded-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center text-xl font-bold mt-4 text-gray-800"
            >
              NISHA
            </motion.h3>
          </div>
        </Tilt>

        {/* Optional Floating Cap Icon
        <motion.div
          className="absolute top-20 right-20 w-24 h-24"
          initial={{ y: -20, rotate: -10 }}
          animate={{ y: 20, rotate: 10 }}
          transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-full h-full drop-shadow-lg"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Click;
