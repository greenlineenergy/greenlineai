import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, Phone, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const serviceId = "service_k8ainqb";
    const templateId = "template_orpr1n1";
    const publicKey = "gNWjxOp5Y9jBPtO_C";
    const formData = new FormData(event.target);
    const templateParams = {
      form_type: 'General Contact Form',
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      phone_number: formData.get('phone'),
      service_interest: formData.get('service'),
      message: formData.get('message'),
      is_referral: 'No',
      friend_name: 'N/A',
      friend_email: 'N/A',
      friend_phone: 'N/A',
      to_email: 'contact@GLEnergy.com.au'
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(response => {
      console.log('SUCCESS!', response.status, response.text);
      navigate('/request-received');
    }, err => {
      console.error('FAILED...', err);
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
        variant: 'destructive'
      });
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-32 bg-gray-900 text-light-text"
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to <span className="text-gradient">Upgrade Your Home?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-lg">
                Let's make your home more energy-efficient and comfortable. Contact us today for a free, no-obligation assessment and discover how much you can save with government rebates.
              </p>
            </div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <a href="tel:1300024767" className="flex items-center space-x-4 group">
                <div className="bg-lime-500/10 p-4 rounded-full transition-colors group-hover:bg-lime-500/20">
                  <Phone className="h-6 w-6 text-lime-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Give Us a Call</p>
                  <p className="text-gray-400 group-hover:text-white transition-colors text-base">13000 24-7 67</p>
                </div>
              </a>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Our Location</p>
                  <p className="text-gray-400 text-base">Serving Greater Melbourne & Regional Victoria</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-gray-400">
                For detailed legal information, please see our{' '}
                <Link to="/legal-notice" className="underline hover:text-white transition-colors">Legal Notice</Link>.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-dark-background/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl shadow-lime-500/5">
              <h3 className="text-2xl font-bold text-white mb-6">Get a Free Energy Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Your Name *" required className="contact-input" />
                <input type="email" name="email" placeholder="Email Address *" required className="contact-input" />
                <select name="service" required className="contact-input appearance-none">
                  <option value="" disabled selected>Which service are you interested in? *</option>
                  <option>Air Conditioning</option>
                  <option>Hot Water System</option>
                  <option>Solar Panels</option>
                  <option>General Inquiry</option>
                </select>
                <input type="tel" name="phone" placeholder="Phone Number" className="contact-input" />
                <textarea name="message" placeholder="Your Message" rows="3" className="contact-input"></textarea>
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Your data is safe with us. We're GDPR compliant.</span>
                </div>
                <Button type="submit" className="btn-primary w-full text-base py-3.5">
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactSection;