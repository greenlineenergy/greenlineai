import React from 'react';
import { motion } from 'framer-motion';

const BigNumbers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-dark-background py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-around items-center text-center">
          <motion.div variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-300 tracking-tighter">
            13000
          </motion.div>
          <motion.div variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-24-7 tracking-tighter">
            24-7
          </motion.div>
          <motion.div variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-300 tracking-tighter">
            67
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BigNumbers;