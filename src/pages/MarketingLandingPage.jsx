import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { CheckCircle, ArrowRight, DollarSign, Zap, Sun, Award, Users, FileText, Send, MessageSquare as MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';
const SavingsBreakdown = React.lazy(() => import('@/components/marketing/SavingsBreakdown'));
const HowItWorks = React.lazy(() => import('@/components/marketing/HowItWorks'));
const Testimonials = React.lazy(() => import('@/components/marketing/Testimonials'));
const FaqSection = React.lazy(() => import('@/components/marketing/FaqSection'));
const LocationMap = React.lazy(() => import('@/components/LocationMap'));
const SavingsCalculator = ({
  formRef
}) => {
  const [bill, setBill] = useState(150);
  const estimatedSavings = Math.round(bill * 12 * 0.35);
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    amount: 0.5
  }} transition={{
    duration: 0.6
  }} className="bg-gray-900 border border-lime-500/30 rounded-2xl p-8 max-w-2xl mx-auto my-16 text-center shadow-glow">
      <h3 className="text-2xl font-bold text-white mb-2">Calculate Your Savings Free</h3>
      <p className="text-gray-400 mb-6">Use the slider to estimate your annual savings.</p>
      <div className="mb-6">
        <div className="flex justify-between text-white font-semibold mb-2">
          <span>Your Monthly Bill:</span>
          <span>${bill}</span>
        </div>
        <Slider defaultValue={[150]} max={500} min={50} step={10} onValueChange={value => setBill(value[0])} />
      </div>
      <div className="bg-dark-background rounded-lg p-6">
        <p className="text-gray-400 text-lg">Estimated Annual Savings:</p>
        <p className="text-5xl font-bold text-gradient my-2">
          ${estimatedSavings.toLocaleString()}
        </p>
      </div>
      <Button onClick={handleScrollToForm} className="btn-primary mt-8 w-full md:w-auto text-lg">
        Claim My Rebate Now <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </motion.div>;
};
const MarketingLandingPage = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const formSectionRef = useRef(null);
  const [emailJsLoaded, setEmailJsLoaded] = useState(false);
  const handleScrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const loadEmailJs = () => {
    if (!emailJsLoaded) {
      emailjs.init('gNWjxOp5Y9jBPtO_C');
      setEmailJsLoaded(true);
    }
  };
  const sendEmail = e => {
    e.preventDefault();
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_postcode: formData.get('user_postcode'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email'),
      property_type: formData.get('property_type'),
      eligibility: formData.getAll('eligibility').join(', ') || 'Not specified',
      interests: formData.getAll('interests').join(', ') || 'Not specified',
      notes: formData.get('notes')
    };
    emailjs.send('service_k8ainqb', 'template_9ycqa7g', templateParams, 'gNWjxOp5Y9jBPtO_C').then(result => {
      console.log('SUCCESS (Rebate)!', result.status, result.text);
      navigate('/thank-you');
    }, error => {
      console.error('FAILED (Rebate)...', error);
      toast({
        title: 'Submission Failed ❌',
        description: `Could not send your rebate request. Error: ${error.text || 'Unknown Error'}. Please verify your EmailJS account at https://dashboard.emailjs.com.`,
        variant: 'destructive'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="bg-dark-background text-light-text overflow-x-hidden">
    <Helmet>
      <title>Save Up to $9,900* combined on Solar, Hot Water & Aircon | GreenLine Energy</title>
      <meta name="description" content="Claim your VEU rebate today! Save up to $2,500 on solar hot water, $4,000 on solar & battery, and $1,800 on aircon. No upfront costs for eligible VIC/QLD homes." />
        <meta property="og:title" content="Save Up to $9,900* combined on Solar, Hot Water & Aircon | GreenLine Energy" />
        <meta property="og:description" content="Claim your VEU rebate today! Save up to $2,500 on solar hot water, $4,000 on solar & battery, and $1,800 on aircon. No upfront costs for eligible VIC/QLD homes." />
        <meta property="og:url" content="https://www.glenergy.com.au/offer" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-01_19_18-pm-PoM8n.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </Helmet>

    <section className="relative text-white text-center py-20 md:py-32 px-4 hero-bg">
      <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Energy savings animation background" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/greenline_banner_logo-FgiUJ.gif" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="text-xl md:text-2xl font-semibold text-lime-400 mb-4">
          <DollarSign className="inline-block h-6 w-6 mr-2" />
          Households Saved $1.2M This Month!
        </motion.div>
        <motion.h1 initial={{
          opacity: 0,
          y: -30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          type: 'spring'
        }} className="text-4xl md:text-6xl font-black tracking-tight">
          Save Up to <span className="text-gradient">$9,900 combined</span> on Solar, Hot Water & Aircon
        </motion.h1>
        <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="mt-4 text-xl md:text-2xl font-semibold text-gray-200">
          Slash Bills by 50% with Government-Backed Rebates
        </motion.p>
        <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }} className="mt-6 max-w-2xl mx-auto text-gray-300">Up to $2,500 for solar hot water, $4,000 for solar & battery, $1,800 for aircon, plus LED savings. No upfront costs for eligible Victorian homes.</motion.p>
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} className="mt-10">
          <motion.button onClick={handleScrollToForm} className="btn-primary text-xl font-bold shadow-glow w-full rounded-2xl px-8 py-6 min-h-[56px] motion-safe:animate-pulse-subtle" whileHover={{
            scale: 1.05,
            animation: 'none'
          }}>
            Check My Rebate
            <ArrowRight className="ml-2 h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>

    <Suspense fallback={<div className="h-96" />}>
      <SavingsBreakdown />
    </Suspense>
    
    <SavingsCalculator formRef={formSectionRef} />

    <Suspense fallback={<div className="h-96" />}>
      <HowItWorks />
    </Suspense>
    
    <Suspense fallback={<div className="h-96" />}>
      <Testimonials />
    </Suspense>

    <Suspense fallback={<div className="h-96" />}>
      <FaqSection />
    </Suspense>

    <Suspense fallback={<div className="h-96" />}>
      <LocationMap />
    </Suspense>

    <section ref={formSectionRef} className="py-16 md:py-24 bg-dark-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don't Miss Out – <span className="text-gradient">Save Today!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Fill out the form to lock in your rebate. Our team will contact you to confirm your eligibility.
          </p>
        </div>
        <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8
        }} className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
          <form ref={form} onSubmit={sendEmail} onFocus={loadEmailJs} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="user_name" placeholder="Full Name*" required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none" />
              <input type="text" name="user_postcode" placeholder="Postcode*" required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none" />
              <input type="tel" name="user_phone" placeholder="Phone*" required pattern="^\+?\d{10,15}$" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none" />
              <input type="email" name="user_email" placeholder="Email*" required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none" />
            </div>
            <div>
              <select name="property_type" required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none">
                <option value="">Property Type*</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset>
                <legend className="text-white font-semibold mb-3">Eligibility (Solar Homes – VIC)*</legend>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="eligibility" value="Owner-occupier" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Owner-occupier
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="eligibility" value="Property value under $3M" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Property value under $3M
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="eligibility" value="Household income under $210k" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Household income under $210k
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="eligibility" value="Address not previously claimed" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Address not previously claimed
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-white font-semibold mb-3">I'm interested in</legend>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="interests" value="Hot water heat pumps" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Hot water heat pumps
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="interests" value="Air conditioning" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Air conditioning
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" name="interests" value="Solar & battery" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-lime-500 focus:ring-lime-500 mr-2" />
                    Solar & battery
                  </label>
                </div>
              </fieldset>
            </div>
            <div>
              <textarea name="notes" placeholder="Tell us anything helpful…" rows="4" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-lime-500 focus:outline-none"></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="btn-primary w-full md:w-auto text-lg" disabled={isSubmitting}>
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Claim My Rebate'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  </motion.div>;
};
export default MarketingLandingPage;