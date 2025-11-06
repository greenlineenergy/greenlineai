import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building } from 'lucide-react';

const LocationMap = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Visit Our <span className="text-gradient">Head Office</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We're centrally located in the heart of Melbourne.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="bg-dark-background p-8 rounded-2xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-lime-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">GreenLine Energy Pty Ltd</h3>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-lime-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-gray-300 font-semibold">Suite 329/98-100 Elizabeth Street</p>
                <p className="text-gray-400">Melbourne, VIC, 3000</p>
              </div>
            </div>
             <p className="text-gray-500 text-sm mt-4">ACN: 910 551 001</p>
          </motion.div>
          <motion.div 
            className="h-80 lg:h-full rounded-2xl overflow-hidden border-4 border-lime-500/30 shadow-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=144.9635%2C-37.8155%2C144.9675%2C-37.8135&layer=mapnik&marker=-37.8145,144.9655"
              title="GreenLine Energy Head Office Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationMap;