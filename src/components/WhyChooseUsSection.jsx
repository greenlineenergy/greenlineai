import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, DollarSign, Users, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    "Government rebates available",
    "Expert certified technicians", 
    "100% satisfaction guarantee",
    "Free consultation & quotes",
    "Premium quality equipment",
    "Comprehensive warranties"
  ];

  const trustBadges = [
    {
      icon: <Shield className="h-8 w-8 text-lime-500" />,
      title: "VEU Accredited",
      subtitle: "Victorian Energy Upgrades"
    },
    {
      icon: <Award className="h-8 w-8 text-teal-500" />,
      title: "Clean Energy Council",
      subtitle: "Certified Installer"
    },
    {
      icon: <Clock className="h-8 w-8 text-lime-500" />,
      title: "24/7 Support",
      subtitle: "Always Available"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "5000+ Customers",
      subtitle: "Trusted Nationwide"
    }
  ];

  return (
    <section className="py-20 bg-dark-background"> {/* Adjusted for dark background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {/* Adjusted for dark background */}
            Why Choose <span className="text-gradient">GreenLine Energy</span>
          </h2>
          <p className="text-xl text-light-text max-w-3xl mx-auto"> {/* Adjusted for dark background */}
            Australia's trusted renewable energy partner with proven expertise and exceptional service
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="trust-badge"
            >
              <div className="mb-4 flex justify-center">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2"> {/* Adjusted for dark background */}
                {badge.title}
              </h3>
              <p className="text-light-text text-sm"> {/* Adjusted for dark background */}
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 24/7 Availability Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-lime-500 to-teal-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-glow">
            <Clock className="h-6 w-6" />
            <span>Available 24/7: 13000 24-7 67</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg" // Adjusted for dark background
            >
              <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0" />
              <span className="text-light-text font-medium">{feature}</span> {/* Adjusted for dark background */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;