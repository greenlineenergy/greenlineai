import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sun, DollarSign, Home, Users, CheckCircle, FileText, BarChart, ArrowRightCircle } from 'lucide-react';

const SolarRebates = () => {
  const navigate = useNavigate();
  const scrollToContact = () => navigate('/#contact');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-dark-background text-light-text"
    >
      <Helmet>
        <title>Victoria Solar Rebates (Solar Homes Program) | GreenLine Energy</title>
        <meta name="description" content="Learn about the Victoria Solar Homes Program and how you can get up to $1,400 in rebates for solar panels, plus an interest-free loan. GreenLine Energy makes it simple." />
        <meta name="keywords" content="Victoria solar rebates, Solar Homes Program, solar panel rebate, interest-free solar loan, GreenLine Energy, solar Victoria" />
        <link rel="canonical" href="https://www.glenergy.com.au/solar-rebates" />
        <meta property="og:title" content="Victoria Solar Rebates (Solar Homes Program) | GreenLine Energy" />
        <meta property="og:description" content="Learn about the Victoria Solar Homes Program and how you can get up to $1,400 in rebates for solar panels, plus an interest-free loan. GreenLine Energy makes it simple." />
        <meta property="og:url" content="https://www.glenergy.com.au/solar-rebates" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/solar_rebates_greenline-1-23iuk.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Happy family in front of a house with solar panels" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/solar_rebates_greenline-1-23iuk.jpeg" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Victoria Solar Rebates Made Simple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl"
          >
            Your Guide to the Solar Homes Program
          </motion.p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">The Solar Homes Program</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              This Victorian Government initiative helps homeowners make solar and battery systems more affordable. It offers rebates and loans to help you cut bills, reduce reliance on fossil fuels, and support a cleaner Victoria.
            </p>
          </section>

          <section className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="info-card"
            >
              <h3 className="info-card-title"><BarChart className="h-6 w-6" /> Why It Matters</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Lower bills from day one</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Less dependence on the grid</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Lift your home's value</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Shrink your carbon footprint</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Access government-backed finance</span>
                </div>
              </div>
            </motion.div>
          </section>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="info-card"
            >
              <h3 className="info-card-title"><DollarSign className="h-6 w-6" /> How Much Can You Get? (as of 2025)</h3>
              <ul className="info-card-list space-y-3">
                <li><Sun className="h-5 w-5 icon" /> <span><strong>Solar PV Rebate:</strong> Up to $1,400</span></li>
                <li><DollarSign className="h-5 w-5 icon" /> <span><strong>Interest-Free Loan:</strong> Up to $1,400 (matches the rebate)</span></li>
                <li><Sun className="h-5 w-5 icon" /> <span><strong>Solar Hot Water Rebate:</strong> Up to $1,000</span></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="info-card"
            >
              <h3 className="info-card-title"><Users className="h-6 w-6" /> Who Can Apply?</h3>
              <ul className="info-card-list space-y-3">
                <li><Home className="h-5 w-5 icon" /> <span>You own and live in the property.</span></li>
                <li><DollarSign className="h-5 w-5 icon" /> <span>Property value under $3 million.</span></li>
                <li><Users className="h-5 w-5 icon" /> <span>Household taxable income under $210,000/year.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /> <span>No previous Solar Homes rebate for the address.</span></li>
                <li><FileText className="h-5 w-5 icon" /> <span>System from an approved retailer/installer.</span></li>
              </ul>
            </motion.div>
          </div>

          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="info-card"
            >
              <h3 className="info-card-title"><ArrowRightCircle className="h-6 w-6" /> How The Process Works</h3>
              <ol className="relative border-l border-gray-700 space-y-10 pl-6">
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">1. Get a Quote</h4>
                  <p className="text-gray-300">Contact us for a quote from an approved provider.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">2. Apply for Eligibility</h4>
                  <p className="text-gray-300">We guide you through the Solar Victoria portal with your quote, ID, and income docs.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">3. Get Approved & Save</h4>
                  <p className="text-gray-300">The rebate is deducted directly from your invoice. Opt for the interest-free loan if you wish.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">4. Install & Start Saving</h4>
                  <p className="text-gray-300">Our team installs your system, and you start enjoying the benefits.</p>
                </li>
              </ol>
            </motion.div>
          </section>

          <section className="text-center bg-gray-900 p-12 rounded-2xl border border-lime-500/30 shadow-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Next Steps with GreenLine Energy</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We'll help you pick the right solar setup, maximise your rebates, handle all the paperwork, and provide clear, upfront pricing. Let's make your solar journey simple and rewarding.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              Get My Free Solar Quote
            </Button>
            <p className="text-sm text-gray-500 mt-6">Note: Program rules and amounts can change. We’ll confirm your exact eligibility and benefits at the time of quoting.</p>
          </section>

        </div>
      </main>
    </motion.div>
  );
};

export default SolarRebates;