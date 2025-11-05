import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Wind, Sun, Waves } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Thermometer className="h-12 w-12 text-lime-500" />,
      title: "Heat Pump Hot Water",
      description: "Energy-efficient hot water systems that reduce electricity costs by up to 70%"
    },
    {
      icon: <Wind className="h-12 w-12 text-teal-500" />,
      title: "Reverse Cycle Air Conditioning",
      description: "Year-round comfort with heating and cooling solutions that maximize energy efficiency"
    },
    {
      icon: <Sun className="h-12 w-12 text-lime-500" />,
      title: "Solar PV + Battery",
      description: "Complete solar power systems with battery storage for maximum energy independence"
    },
    {
      icon: <Waves className="h-12 w-12 text-teal-500" />,
      title: "Hydronic Heating",
      description: "Efficient radiant heating systems for comfortable, even warmth throughout your home"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-background"> {/* Adjusted for dark background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {/* Adjusted for dark background */}
            Our <span className="text-gradient">Energy Solutions</span>
          </h2>
          <p className="text-xl text-light-text max-w-3xl mx-auto"> {/* Adjusted for dark background */}
            Comprehensive renewable energy services designed to reduce your environmental impact and energy costs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card group"
            >
              <div className="mb-6 flex justify-center float-animation">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4"> {/* Adjusted for dark background */}
                {service.title}
              </h3>
              <p className="text-light-text leading-relaxed"> {/* Adjusted for dark background */}
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;