import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ClipboardCheck, DollarSign, ArrowRight } from 'lucide-react';

const CombinedCta = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 0,
      opacity: 1
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      id="combined-cta"
      className="py-20 md:py-24 bg-dark-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Take the Next Step to <span className="text-gradient">Energy Savings</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get started with a free assessment or earn by referring a friend
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Free Assessment Box */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToContact}
            className="bg-gradient-to-br from-lime-500/10 to-lime-600/5 border-2 border-lime-500/30 p-8 rounded-2xl shadow-2xl shadow-lime-500/10 cursor-pointer hover:border-lime-500/50 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-lime-500/20 p-4 rounded-full">
                <ClipboardCheck className="h-12 w-12 text-lime-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Free Assessment</h3>
              <p className="text-gray-300 text-lg">
                Get a free, no-obligation energy assessment and discover how much you can save with government rebates
              </p>
              <Button className="btn-primary w-full text-lg py-3.5 mt-4">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Referral Box */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToContact}
            className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 border-2 border-teal-500/30 p-8 rounded-2xl shadow-2xl shadow-teal-500/10 cursor-pointer hover:border-teal-500/50 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-teal-500/20 p-4 rounded-full">
                <DollarSign className="h-12 w-12 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">💸 Refer & Earn $200</h3>
              <p className="text-gray-300 text-lg">
                Refer a friend and you both get rewarded! They get $200 off, you get $200 cash
              </p>
              <Button className="btn-secondary w-full text-lg py-3.5 mt-4">
                Start Earning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CombinedCta;