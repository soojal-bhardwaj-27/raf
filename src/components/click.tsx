import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Click = () => {
  return (
    <div className="relative w-full min-h-screen bg-white text-black py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="flex-1 space-y-6">
          {/* <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12 }}
          > */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Student Speaks
            </h2>
            <div className="mt-2 w-20 h-1 bg-black rounded-full" />
          {/* </motion.div> */}

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            "I RECEIVED THE FINEST
            <br />
            CAREER TRAINING"
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg font-medium max-w-2xl"
          >
            "Being at Raffles University not only helped me secure a job but also provided
            exceptional career development opportunities. The training and support
            equipped me with the right skills and competencies to achieve a successful
            placement with a great package at my dream company."
          </motion.p>
        </div>

        {/* Simple Image with Name (No Cards, No BG) */}
        <Tilt
          glareEnable={false}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full md:w-1/3"
        >
          <motion.img
            src="/nisha.png"
            alt="Nisha - Raffles Student"
            className="w-full object-contain"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-xl font-bold mt-4"
          >
            NISHA
          </motion.h3>
        </Tilt>
      </div>
    </div>
  );
};

export default Click;
