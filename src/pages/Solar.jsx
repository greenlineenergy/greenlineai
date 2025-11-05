import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sun, BatteryCharging, DollarSign, MapPin, CheckCircle, Package, HelpCircle } from 'lucide-react';
const Solar = () => {
  const navigate = useNavigate();
  const scrollToContact = () => navigate('/#contact');
  const faqs = [{
    question: 'What rebates are available for solar and battery systems?',
    answer: 'Homeowners can get up to $5,000 rebate for solar panels and battery packages. A typical complete install of a 6.6 kW system with 13 kWh battery bundle can be as low as $7,100.'
  }, {
    question: 'How much does a battery cost after rebates?',
    answer: 'Battery systems start from $3,800 to $9,500 after rebates. These amounts largely depend on the battery capacity and brand.'
  }, {
    question: 'Can I get a battery if I already have solar?',
    answer: 'Yes. If you have existing solar, you can now add a battery and still claim rebates—perfect for storing your solar energy instead of exporting it.'
  }, {
    question: 'Are finance options available?',
    answer: 'Yes, we offer flexible finance plans to help you get started with little or no upfront cost.'
  }, {
    question: 'How do I apply for rebates?',
    answer: 'At GreenLine Energy, we take care of all the paperwork and approvals, so you don’t have to worry. We’ll guide you every step of the way.'
  }];
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="bg-dark-background text-light-text">
      <Helmet>
        <title>Solar PV & Battery Storage | Rebates Available | GreenLine Energy</title>
        <meta name="description" content="Generate your own clean energy with solar PV and battery storage from GreenLine Energy. Achieve energy independence and save on bills. Rebates available." />
        <meta name="keywords" content="solar pv, battery storage, solar panels Victoria, energy independence, solar rebates, home battery" />
        <link rel="canonical" href="https://www.glenergy.com.au/solar" />
        <meta property="og:title" content="Solar PV & Battery Storage | Rebates Available | GreenLine Energy" />
        <meta property="og:description" content="Generate your own clean energy with solar PV and battery storage from GreenLine Energy. Achieve energy independence and save on bills. Rebates available." />
        <meta property="og:url" content="https://www.glenergy.com.au/solar" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/solar_battery_greenline-1-tyEiQ.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Solar panels on a modern roof under a bright sun" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/solar_battery_greenline-1-tyEiQ.jpeg" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-4xl md:text-6xl font-bold">
            Solar PV + Battery Storage
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="mt-4 text-xl md:text-2xl">
            Power Your Home with the Sun, Day and Night
          </motion.p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Your Path to Energy Independence</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Stacked rebates from state and federal programs make solar and battery bundles cheaper than ever. We provide full transparency so you can make the most of today's offers.
            </p>
          </section>

          <section className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="info-card">
              <h3 className="info-card-title"><MapPin className="h-6 w-6" /> Solar & Battery Rebates — Quick Facts</h3>
              <ul className="info-card-list">
                <li><MapPin className="h-5 w-5 icon" /> <span><strong>VIC (Solar Victoria):</strong> Up to $1,400 off solar panels + support for batteries.</span></li>
                <li><MapPin className="h-5 w-5 icon" /> <span><strong>NSW (PDRS):</strong> Up to $4,000 back on batteries, ideal for existing solar owners.</span></li>
                <li><MapPin className="h-5 w-5 icon" /> <span><strong>Nationwide (STCs):</strong> Federal incentives that shave thousands off your upfront system cost.</span></li>
              </ul>
              <h4 className="text-lg font-bold text-lime-400 mt-6 mb-3">Why Add a Battery?</h4>
               <ul className="info-card-list">
                <li><CheckCircle className="h-5 w-5 icon" /><span>Store daytime solar to use at night.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /><span>Cut grid reliance & bill shocks.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /><span>Gain backup power with certain systems.</span></li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">Eligibility criteria, location, and income caps apply. Amounts can change—check with us to confirm your exact rebate.</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="info-card">
              <h3 className="info-card-title"><Package className="h-6 w-6" /> Solar + Storage = Big Savings</h3>
              <p className="text-gray-300 mb-4">Our bundles are designed for maximum value. For example:</p>
              <div className="bg-gray-800 p-4 rounded-lg border border-lime-500/30 mb-4">
                <p className="text-lg font-semibold text-white"><strong>6.6kW Solar + 13kWh Battery Combo</strong></p>
                <p className="text-2xl font-bold text-gradient">From $7,100</p>
                <p className="text-gray-400">Fully installed with up to $5,000 in rebates applied.</p>
              </div>
               <ul className="info-card-list">
                <li><CheckCircle className="h-5 w-5 icon" /><span><strong>Transparent Pricing:</strong> A clear breakdown of every dollar.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /><span><strong>No Hidden Fees:</strong> No BS charges or surprise costs.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /><span><strong>Finance Available:</strong> Flexible payment options to get you started.</span></li>
              </ul>
              <p className="text-white font-semibold mt-4">We make it simple: you get a fixed margin, full transparency, and expert installation.</p>
            </motion.div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 text-center mb-20">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <DollarSign className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Slash Your Power Bills</h3>
              <p>Dramatically reduce or even eliminate your electricity bills by generating your own power from the sun.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <BatteryCharging className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Energy Security</h3>
              <p>With a battery system, you'll have backup power during blackouts, keeping your lights on and essentials running.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <Sun className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainable Living</h3>
              <p>Reduce your carbon footprint and contribute to a cleaner environment by using 100% renewable energy.</p>
            </div>
          </section>

          <section className="mb-20">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="info-card">
              <h2 className="info-card-title"><HelpCircle className="h-6 w-6" /> Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>)}
              </div>
            </motion.div>
          </section>

          <section className="text-center bg-gray-900 p-12 rounded-2xl border border-lime-500/30 shadow-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Go Solar with GreenLine Energy</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Our team of experts will design and install a custom solar and battery solution tailored to your energy needs and budget.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              Request a Solar Quote
            </Button>
          </section>
        </div>
      </main>
    </motion.div>;
};
export default Solar;