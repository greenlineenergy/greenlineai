import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Wrench, Star, Phone, Gift, Search, BookOpen, Award } from 'lucide-react';
const ThankYou = () => {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'form_submission_thankyou', {
        'event_category': 'engagement',
        'event_label': 'Form Submission Success'
      });
    }
  }, []);
  const testimonials = [{
    quote: "GreenLine handled all the VEU rebate paperwork and made upgrading my old air conditioner so affordable. My home has never been more comfortable.",
    name: "David L.",
    location: "Geelong, VIC",
    rating: 5
  }, {
    quote: "From the initial quote to the final installation of our solar panels, the service was top-notch. The team explained everything clearly and now we're generating our own clean energy. Fantastic!",
    name: "Emily R.",
    location: "Ballarat, VIC",
    rating: 5
  }];
  const nextSteps = [{
    icon: <Search className="h-8 w-8 text-lime-400" />,
    text: "We'll check eligibility"
  }, {
    icon: <BookOpen className="h-8 w-8 text-lime-400" />,
    text: "We'll book the installation"
  }, {
    icon: <Award className="h-8 w-8 text-lime-400" />,
    text: "You'll get your reward"
  }];
  return <>
      <Helmet>
        <title>Thank You! | GreenLine Energy</title>
        <meta name="description" content="Thank you! We've received your request. A GreenLine Energy specialist will review your details and be in touch shortly to confirm eligibility for VEU rebates and referral rewards." />
        <meta name="keywords" content="Victorian Energy Upgrades rebates, solar rebates Melbourne, heat pump hot water upgrades, GreenLine Energy referral program, thank you" />
        <meta property="og:title" content="Thank You! | GreenLine Energy" />
        <meta property="og:description" content="Thank you! We've received your request. A GreenLine Energy specialist will review your details and be in touch shortly to confirm eligibility for VEU rebates and referral rewards." />
        <meta property="og:url" content="https://www.glenergy.com.au/thank-you" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/9c69d283-c22d-4027-8a9e-d281eba9ab16-1-1-4EMf8.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <div className="bg-dark-background text-light-text">
        <header className="relative h-[60vh] flex items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Happy family smiling in front of their modern home with solar panels on the roof" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/9c69d283-c22d-4027-8a9e-d281eba9ab16-1-1-4EMf8.png" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          ease: 'easeOut'
        }} className="relative z-10 max-w-3xl w-full">
            <div className="flex justify-center mb-6">
              <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}>
                <CheckCircle className="h-20 w-20 text-lime-400" />
              </motion.div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Your referral has been received successfully.
            </p>
          </motion.div>
        </header>

        <main className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-20">
              <h2 className="text-3xl font-bold text-white mb-4">What Happens Next?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A GreenLine Energy specialist will review the referral and contact both you and your friend to confirm eligibility for the <span className="text-lime-400 font-semibold">$200 cash reward</span> and <span className="text-lime-400 font-semibold">$200 discount</span>. Your rebates are secure with us as a VEU-accredited provider under the Victorian Energy Upgrades program.
              </p>
            </section>

            <section className="mb-20">
              <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                {nextSteps.map((step, i) => <motion.div key={i} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: i * 0.2
              }} viewport={{
                once: true
              }} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-gray-800 border-2 border-lime-500 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <p className="font-semibold text-white">{step.text}</p>
                  </motion.div>)}
              </div>
            </section>

            <section className="text-center mb-20">
              <Button asChild size="lg" className="btn-primary text-lg shadow-glow">
                <Link to="/referral">
                  <Gift className="mr-2 h-5 w-5" />
                  Refer Another Friend
                </Link>
              </Button>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-center text-white mb-12">Join Other Happy Customers</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="bg-gray-900 p-8 rounded-2xl border border-gray-700 flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                    </div>
                    <blockquote className="text-light-text italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </motion.div>)}
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-gray-900 text-center py-8 px-4 border-t border-gray-800">
          <p className="text-lg text-gray-300 mb-2">Have questions? Contact us directly.</p>
          <a href="tel:1300024767" className="flex items-center justify-center gap-2 text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors mb-4">
            <Phone className="h-6 w-6" />
            13000 24-7 67
          </a>
          <Link to="/" className="text-gray-500 hover:text-lime-400 transition-colors">
            Back to www.glenergy.com.au
          </Link>
        </footer>
      </div>
    </>;
};
export default ThankYou;