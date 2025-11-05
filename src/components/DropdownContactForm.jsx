import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { X, Send, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DropdownContactForm = ({ isOpen, onClose, onOpen }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_k8ainqb";
    const templateId = "template_orpr1n1";
    const publicKey = "gNWjxOp5Y9jBPtO_C";

    const formData = new FormData(event.target);
    const templateParams = {
      form_type: 'Dropdown Contact Form',
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

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
        event.target.reset();
        navigate('/request-received');
      }, (err) => {
        console.error('FAILED...', err);
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request. Please try again.',
          variant: 'destructive',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Button
                onClick={onOpen}
                className="btn-primary rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
                aria-label="Open contact form"
              >
                <MessageSquare className="h-8 w-8" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close contact form"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-grow">
              <input type="text" name="name" placeholder="Your Name *" required className="contact-input" />
              <input type="email" name="email" placeholder="Email Address *" required className="contact-input" />
              <input type="tel" name="phone" placeholder="Phone Number *" required className="contact-input" />
              <select name="service" required className="contact-input appearance-none">
                <option value="" disabled selected>Select a service... *</option>
                <option>Solar</option>
                <option>Heat Pump</option>
                <option>Air Conditioning</option>
                <option>Other</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="5" className="contact-input"></textarea>
              <Button type="submit" className="btn-primary w-full text-base py-3" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="mr-2 h-4 w-4" /> Send Message</>
                )}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropdownContactForm;