import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuickForm from '@/components/QuickForm';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg">
      <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Modern eco-home with solar panels on roof" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-oct-9-2025-06_04_16-pm-1-a2wxi.png" loading="eager" fetchpriority="high" />
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Melbourne Residents: Unlock up to <span className="text-lime-400">$9,900 in VEU Rebates Today</span>
          </h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">Upgrade old heaters, AC, or hot water to energy-efficient tech — slash bills, boost comfort, and cut emissions.</motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow">FREE ASSESSMENT</Button>
            <div className="flex items-center space-x-2 text-white">
              <span className="text-sm sm:text-base md:text-lg">Or call now:</span>
              <a href="tel:1300024767" className="text-base sm:text-lg md:text-xl font-bold text-lime-400 hover:underline">13000 24-7 67</a>
            </div>
          </motion.div>

          <QuickForm />

        </motion.div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-white cursor-pointer" onClick={() => document.getElementById('services').scrollIntoView({
          behavior: 'smooth'
        })}>
            <ArrowDown className="h-8 w-8 mx-auto" />
            <p className="text-sm mt-2"></p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;