import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [{
    icon: <FileText className="h-8 w-8 text-lime-400" />,
    title: "Free Audit",
    description: "We check your eligibility and find the best rebates for your home."
  }, {
    icon: <CheckCircle className="h-8 w-8 text-lime-400" />,
    title: "Instant Rebate Approval",
    description: "We handle the paperwork for fast approval from government bodies."
  }, {
    icon: <Zap className="h-8 w-8 text-lime-400" />,
    title: "Zero-Cost Install*",
    description: "Many upgrades are fully covered, so you pay nothing upfront for installation."
  }];
  return <div className="py-16 bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        How It Works in <span className="text-gradient">3 Simple Steps</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="flex flex-col items-center">
          <div className="bg-gray-800 rounded-full p-4 mb-4 border-2 border-lime-500/30">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </motion.div>)}
      </div>
    </div>
  </div>;
};

export default HowItWorks;