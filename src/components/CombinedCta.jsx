import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Send, Loader2, Shield, User, UserPlus, Gift, DollarSign } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const CombinedCta = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingReferral, setIsSubmittingReferral] = useState(false);
  const contactFormRef = useRef();
  const referralFormRef = useRef();
  useEffect(() => {
    emailjs.init("gNWjxOp5Y9jBPtO_C");
  }, []);
  const sendEmail = (e, formType) => {
    e.preventDefault();
    let templateParams = {};
    let formRef;
    let setIsSubmitting;
    let isSubmitting;
    const serviceId = "service_k8ainqb";
    const templateId = "template_orpr1n1";
    if (formType === 'contact') {
      setIsSubmitting = setIsSubmittingContact;
      isSubmitting = isSubmittingContact;
      formRef = contactFormRef;
      const formData = new FormData(formRef.current);
      templateParams = {
        form_type: 'Home Page CTA Form',
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
    } else if (formType === 'referral') {
      setIsSubmitting = setIsSubmittingReferral;
      isSubmitting = isSubmittingReferral;
      formRef = referralFormRef;
      const formData = new FormData(formRef.current);
      templateParams = {
        form_type: 'Home Page Referral Form',
        from_name: formData.get('referrer_name'),
        from_email: formData.get('referrer_email'),
        phone_number: 'N/A (Referrer)',
        service_interest: 'Referral ($200/$200 Offer)',
        message: `Referrer ${formData.get('referrer_name')} has referred ${formData.get('friend_name')}. Friend gets $200 off, Referrer gets $200 cash.`,
        is_referral: 'Yes',
        friend_name: formData.get('friend_name'),
        friend_email: formData.get('friend_email'),
        friend_phone: formData.get('friend_phone'),
        to_email: 'contact@GLEnergy.com.au'
      };
    }
    if (isSubmitting) return;
    setIsSubmitting(true);
    emailjs.send(serviceId, templateId, templateParams).then(response => {
      console.log('SUCCESS!', response.status, response.text);
      formRef.current.reset();
      navigate('/request-received');
      toast({
        title: "Thanks! We'll be in touch soon. ✅",
        description: "Your request has been sent successfully."
      });
    }, err => {
      console.error('FAILED...', err);
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
        variant: 'destructive'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 0,
      opacity: 1
    },
    // Removed initial y:20 to prevent "moving arrow" perception
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  return <motion.section id="combined-cta" className="py-20 md:py-24 bg-dark-background" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
    once: true,
    amount: 0.2
  }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Take the Next Step to <span className="text-gradient">Energy Savings</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you want a free quote or want to earn by referring a friend, we've got you covered.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="assessment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 p-1.5 rounded-xl border border-gray-700/50">
              <TabsTrigger value="assessment" className="text-base py-2.5">Free Assessment</TabsTrigger>
              <TabsTrigger value="referral" className="text-base py-2.5">💸 Refer & Earn $200</TabsTrigger>
            </TabsList>
            <TabsContent value="assessment" className="mt-6">
              <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-lime-500/5">
                <form ref={contactFormRef} onSubmit={e => sendEmail(e, 'contact')} className="space-y-4">
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
                  <div className="flex items-center text-xs space-x-2 cya-text">
                    <Shield className="h-4 w-4" />
                    <span>Your data is safe with us. We're GDPR compliant.</span>
                  </div>
                  <Button type="submit" className="btn-primary w-full text-base py-3.5" disabled={isSubmittingContact}>
                    {isSubmittingContact ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-4 w-4" /> Send Request</>}
                  </Button>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="referral" className="mt-6">
              <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-lime-500/5">
                <div className="text-center mb-6">
                  <DollarSign className="h-10 w-10 mx-auto text-lime-500 bg-lime-500/10 p-2 rounded-full mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900">You BOTH Get Rewarded!</h3>
                  <p className="text-gray-600 mt-1">Refer a friend, they get $200 off, you get $200 cash.</p>
                </div>
                <form ref={referralFormRef} onSubmit={e => sendEmail(e, 'referral')} className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-gray-800 flex items-center mb-3 text-sm"><UserPlus className="mr-2 h-4 w-4" />Friend's Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="friend_name" placeholder="Friend's Name *" required className="referral-input" />
                            <input type="email" name="friend_email" placeholder="Friend's Email *" required className="referral-input" />
                        </div>
                        <input type="tel" name="friend_phone" placeholder="Friend's Phone *" required className="referral-input mt-4" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 flex items-center mb-3 text-sm"><User className="mr-2 h-4 w-4" />Your Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" name="referrer_name" placeholder="Your Name *" required className="referral-input" />
                            <input type="email" name="referrer_email" placeholder="Your Email *" required className="referral-input" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full text-lg py-3.5 btn-primary" disabled={isSubmittingReferral}>
                      {isSubmittingReferral ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</> : <><Gift className="mr-2 h-5 w-5" /> Refer & Claim Rewards</>}
                    </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>;
};
export default CombinedCta;