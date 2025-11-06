import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Shield, Lock, Award, MapPin, Gift } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
const Footer = () => {
  const navigate = useNavigate();
  const handleSocialClick = linkName => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const handleAboutClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const scrollToContact = () => navigate('/#contact');
  const socialLinks = [{
    icon: <Facebook className="h-5 w-5" />,
    name: 'Facebook',
    url: 'https://facebook.com/greenlineau'
  }, {
    icon: <Twitter className="h-5 w-5" />,
    name: 'Twitter',
    url: '#'
  }, {
    icon: <Instagram className="h-5 w-5" />,
    name: 'Instagram',
    url: 'https://instagram.com/greenlineau'
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    name: 'LinkedIn',
    url: '#'
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <span className="text-2xl font-bold text-gradient mb-4 block">GreenLine Energy</span>
            <p className="text-gray-400 mb-4 text-sm">
              Australia's trusted renewable energy partner, helping families and businesses reduce their carbon footprint while saving on energy costs.
            </p>
            <div className="flex items-center space-x-2 text-lime-400">
              <span className="font-semibold">24/7 Support:</span>
              <span className="text-lg font-bold">13000 24-7 67</span>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <p className="text-lg font-semibold mb-4 block">Quick Links</p>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm">Home</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm">Services</Link></li>
              <li><button onClick={handleAboutClick} className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm">About</button></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm">Careers</Link></li>
              <li><button onClick={scrollToContact} className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm">Contact</button></li>
              <li><Link to="/referral" className="text-gray-400 hover:text-lime-400 transition-colors cursor-pointer text-sm flex items-center"><Gift className="h-4 w-4 mr-2" />Refer a Friend</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <p className="text-lg font-semibold mb-4 block">Our Services</p>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/hot-water" className="hover:text-lime-400 text-sm">Heat Pump Hot Water</Link></li>
              <li><Link to="/solar" className="hover:text-lime-400 text-sm">Solar PV + Battery</Link></li>
              <li><Link to="/air-conditioning" className="hover:text-lime-400 text-sm">Air Conditioning</Link></li>
              <li><Link to="/veu-rebates" className="hover:text-lime-400 text-sm">VEU Rebates</Link></li>
              <li><Link to="/solar-rebates" className="hover:text-lime-400 text-sm">Solar Rebates</Link></li>
              <li><Link to="/offer" className="hover:text-lime-400 text-sm">Marketing Offers</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <p className="text-lg font-semibold mb-4 block">Follow Us</p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" onClick={social.url === '#' ? e => {
              e.preventDefault();
              handleSocialClick(social.name);
            } : undefined} className="bg-gray-800 p-2 rounded-lg hover:bg-lime-600 transition-colors" aria-label={`Follow us on ${social.name}`}>
                  {social.icon}
                </a>)}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-4 w-4 text-lime-400" />
                <span className="text-sm">VEU</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Lock className="h-4 w-4 text-lime-400" />
                <span className="text-sm">SSL Secured Website</span>
              </div>
               <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-lime-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Suite 329/98-100 Elizabeth Street, Melbourne, VIC, 3000</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} GreenLine Energy Pty Ltd. All rights reserved.</p>
            <p>ACN: 910 551 001</p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2 bg-gray-800 text-lime-400 px-3 py-1 rounded-full text-xs font-bold">
              <Award className="h-4 w-4" />
              <span>Official Website</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-lime-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-lime-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;