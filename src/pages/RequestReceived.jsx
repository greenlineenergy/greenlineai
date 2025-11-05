import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Wrench } from 'lucide-react';

const RequestReceived = () => {
  return (
    <>
      <Helmet>
        <title>Request Received | GreenLine Energy</title>
        <meta name="description" content="Thank you! We've received your request and a GreenLine Energy specialist will be in touch shortly." />
        <meta property="og:title" content="Request Received | GreenLine Energy" />
        <meta property="og:description" content="Thank you! We've received your request and a GreenLine Energy specialist will be in touch shortly." />
        <meta property="og:url" content="https://www.glenergy.com.au/request-received" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-01_19_18-pm-PoM8n.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="A modern Australian home with solar panels on the roof"
           src="https://images.unsplash.com/photo-1660330589211-a78be8472d73" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl w-full"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <CheckCircle className="h-20 w-20 text-[#A6FF00]" />
            </motion.div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Request Received – Thank You!
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10">
            We’ve successfully received your request. A GreenLine Energy specialist will be in touch shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-[#A6FF00] text-black font-bold hover:bg-[#8ed900] transition-all duration-300 transform hover:scale-105">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-[#26A69A] text-[#26A69A] hover:bg-[#26A69A] hover:text-white font-bold transition-all duration-300 transform hover:scale-105">
              <Link to="/">
                <Wrench className="mr-2 h-5 w-5" />
                Explore Our Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RequestReceived;