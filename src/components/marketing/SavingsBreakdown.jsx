import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sun, Users, Award } from 'lucide-react';

const SavingsBreakdown = () => {
  const savingsItems = [{
    icon: <Sun className="h-6 w-6 text-lime-400" />,
    title: "Solar Hot Water",
    amount: "Up to $2,500",
    description: "Full VEU rebate: Slash bills with zero upfront cost."
  }, {
    icon: <Zap className="h-6 w-6 text-lime-400" />,
    title: "Air Conditioning Upgrade",
    amount: "Up to $1,800",
    description: "High-efficiency units: Save 30% on cooling costs."
  }, {
    icon: <Users className="h-6 w-6 text-lime-400" />,
    title: "Solar & Battery",
    amount: "Up to $4,000",
    description: "Power your home, cut bills by 50%+."
  }, {
    icon: <Award className="h-6 w-6 text-lime-400" />,
    title: "LED Lighting",
    amount: "Up to $300",
    description: "Free swap: Save 15% on bills instantly."
  }];
  return <div className="py-16 bg-dark-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Maximize Your Savings Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {savingsItems.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-gray-900 p-6 rounded-2xl border border-lime-500/50 text-center shadow-glow">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-lg font-semibold text-gray-300">{item.title}</p>
              <p className="text-4xl font-bold text-gradient my-2">{item.amount}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>)}
        </div>
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-lime-400">
            Total Potential Savings: Up to $9,900+ combined
          </p>
        </div>
      </div>
    </div>;
};

export default SavingsBreakdown;