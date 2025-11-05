import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = path => {
    navigate(path);
    setIsOpen(false);
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      navigate('/#contact');
    }
    setIsOpen(false);
  };
  const handleAboutClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      navigate('/#services');
    }
    setIsOpen(false);
  };
  return <nav className={`sticky-nav ${isScrolled ? 'shadow-lg backdrop-blur-xl' : 'backdrop-blur-md'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <motion.img src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/b67dc11829391a652ab3a1ddb63a6369.jpg" alt="GreenLine Energy Logo" className="h-12 w-12 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-lime-500/50 group-hover:scale-110" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} />
            <span className="text-2xl font-bold text-gradient">GreenLine Energy</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-light-text hover:text-lime-500 font-medium transition-colors">Home</Link>
            
            <button onClick={scrollToServices} className="text-light-text hover:text-lime-500 font-medium transition-colors">Services</button>

            <button onClick={handleAboutClick} className="text-light-text hover:text-lime-500 font-medium transition-colors"></button>
            <Link to="/careers" className="text-light-text hover:text-lime-500 font-medium transition-colors">Careers</Link>
            <button onClick={scrollToContact} className="text-light-text hover:text-lime-500 font-medium transition-colors"></button>
            
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-4 w-4 text-lime-400" />
              <span className="font-semibold">13000 <span className="text-24-7">24-7</span> 67</span>
            </div>
            <Button onClick={scrollToContact} className="btn-primary">Free Quote</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-text hover:text-lime-500">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleNavClick('/')} className="block px-3 py-2 text-light-text hover:text-lime-500 font-medium w-full text-left">Home</button>
              <button onClick={scrollToServices} className="block px-3 py-2 text-light-text hover:text-lime-500 font-medium w-full text-left">Services</button>
              <button onClick={handleAboutClick} className="block px-3 py-2 text-light-text hover:text-lime-500 font-medium w-full text-left">About</button>
              <button onClick={() => handleNavClick('/careers')} className="block px-3 py-2 text-light-text hover:text-lime-500 font-medium w-full text-left">Careers</button>
              <button onClick={scrollToContact} className="block px-3 py-2 text-light-text hover:text-lime-500 font-medium w-full text-left">Contact</button>
              <div className="px-3 py-2 flex items-center space-x-2 text-white">
                <Phone className="h-4 w-4 text-lime-400" />
                <span className="font-semibold">13000 <span className="text-24-7">24-7</span> 67</span>
              </div>
              <div className="px-3 py-2">
                <Button onClick={scrollToContact} className="btn-primary w-full">Get Free Quote</Button>
              </div>
            </div>
          </motion.div>}
      </div>
    </nav>;
};
export default Navigation;