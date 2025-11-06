import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Gift, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = "service_k8ainqb";
    const templateId = "template_orpr1n1";
    const publicKey = "gNWjxOp5Y9jBPtO_C";

    const formData = new FormData(event.target);
    const templateParams = {
      form_type: 'Exit Intent Popup',
      from_name: 'N/A (Exit Popup)',
      from_email: formData.get('email'),
      phone_number: 'N/A',
      service_interest: 'Exit Intent Offer',
      message: 'Lead from exit-intent popup for $200 off.',
      is_referral: 'No',
      friend_name: 'N/A',
      friend_email: 'N/A',
      friend_phone: 'N/A',
      to_email: 'contact@GLEnergy.com.au'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsOpen(false);
        navigate('/thank-you');
        toast({
          title: 'Success! ✨',
          description: 'Your $200 off coupon has been sent to your email.',
        });
      }, (err) => {
        console.error('FAILED...', err);
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request. Please try again.',
          variant: 'destructive'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="bg-gray-900 border border-lime-500/50 rounded-2xl shadow-glow w-full max-w-lg mx-auto overflow-hidden p-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          <Gift className="h-16 w-16 text-lime-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Wait! Don't Go...</h2>
          <p className="text-xl text-gray-300 mb-6">Get an extra <span className="text-lime-400 font-bold">$200 OFF</span> your quote, just for signing up!</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email to claim your discount" 
              required 
              className="contact-input text-center" 
            />
            <Button type="submit" className="btn-primary w-full text-lg py-3" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Claiming...</>
              ) : (
                <><Send className="mr-2 h-5 w-5" /> Claim My $200 Off</>
              )}
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam, ever.</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;