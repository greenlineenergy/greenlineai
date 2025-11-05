import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StickyCtaBar = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-[50px] left-0 right-0 bg-gradient-to-r from-lime-500 to-teal-500 text-white p-3 shadow-lg z-50 flex items-center justify-center gap-4 flex-wrap"
    >
      <p className="font-bold text-center text-sm md:text-base">
        Claim Up to $9,900 in Rebates Before They End!
      </p>
      <div className="flex items-center gap-4">
        <Button onClick={scrollToContact} size="sm" className="bg-white text-lime-600 hover:bg-gray-200 font-bold hidden sm:flex">
          Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <a href="tel:1300024767" className="flex items-center gap-2 font-semibold">
          <Phone className="h-4 w-4" />
          <span className="text-sm md:text-base">13000 24-7 67</span>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCtaBar;