import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const QuickForm = () => {
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
      form_type: 'Hero Quick Form',
      from_name: 'N/A (Quick Form)',
      from_email: formData.get('email'),
      phone_number: 'N/A',
      service_interest: formData.get('service'),
      message: 'Lead from hero section quick form.',
      is_referral: 'No',
      friend_name: 'N/A',
      friend_email: 'N/A',
      friend_phone: 'N/A',
      to_email: 'contact@GLEnergy.com.au'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('/request-received');
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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-6 bg-black/30 backdrop-blur-sm p-4 rounded-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
          className="contact-input sm:w-1/3"
        />
        <select name="service" required className="contact-input sm:w-1/3 appearance-none">
          <option value="" disabled selected>Select service...</option>
          <option>Air Conditioning</option>
          <option>Hot Water System</option>
          <option>Solar Panels</option>
        </select>
        <Button type="submit" className="btn-secondary w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Get Info
        </Button>
      </form>
    </motion.div>
  );
};

export default QuickForm;