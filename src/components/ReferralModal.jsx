import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { X, Send, User, UserPlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ReferralModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [yourData, setYourData] = useState({ name: '', email: '' });
  const [friendData, setFriendData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleYourChange = (e) => {
    setYourData({ ...yourData, [e.target.name]: e.target.value });
  };

  const handleFriendChange = (e) => {
    setFriendData({ ...friendData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!yourData.name || !yourData.email || !friendData.name || !friendData.email || !friendData.phone) {
      toast({
        title: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const serviceId = "service_k8ainqb";
    const templateId = "template_orpr1n1";
    const publicKey = "gNWjxOp5Y9jBPtO_C";

    const templateParams = {
      form_type: 'Referral Submission',
      from_name: yourData.name,
      from_email: yourData.email,
      phone_number: 'N/A (Referrer)',
      service_interest: 'Referral',
      message: `Referrer ${yourData.name} has referred ${friendData.name}. Friend gets $200 off, Referrer gets $300 cash.`,
      is_referral: 'Yes',
      friend_name: friendData.name,
      friend_email: friendData.email,
      friend_phone: friendData.phone,
      to_email: 'contact@GLEnergy.com.au'
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
        navigate('/thank-you');
        toast({
            title: "Referral Sent! 🎉",
            description: "Thanks for sharing! We'll be in touch with your friend.",
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast({
          title: 'Something went wrong.',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Refer a Friend & Earn $300</h3>
                  <p className="text-gray-400 mt-1">They get $200 off, you get $300 cash. It's a win-win!</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1 -mt-1 -mr-1"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-lime-400">
                    <User className="h-5 w-5" />
                    <h4 className="font-semibold text-lg text-white">Your Information</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Your Name *" value={yourData.name} onChange={handleYourChange} required className="contact-input" />
                    <input type="email" name="email" placeholder="Your Email *" value={yourData.email} onChange={handleYourChange} required className="contact-input" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-teal-400">
                    <UserPlus className="h-5 w-5" />
                    <h4 className="font-semibold text-lg text-white">Your Friend's Information</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Friend's Name *" value={friendData.name} onChange={handleFriendChange} required className="contact-input" />
                    <input type="tel" name="phone" placeholder="Friend's Phone *" value={friendData.phone} onChange={handleFriendChange} required className="contact-input" />
                  </div>
                  <input type="email" name="email" placeholder="Friend's Email *" value={friendData.email} onChange={handleFriendChange} required className="contact-input" />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button type="submit" className="btn-primary px-8 py-3 text-base" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                    ) : (
                        <><Send className="h-5 w-5 mr-2" /> Submit Referral</>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferralModal;