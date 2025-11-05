import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Droplets, Zap, CircleDollarSign, CheckCircle, Sun, ArrowRightCircle, HelpCircle, FileText } from 'lucide-react';
const HotWater = () => {
  const navigate = useNavigate();
  const scrollToContact = () => navigate('/#contact');
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
        <title>Heat Pump Hot Water Systems | Rebates & Savings | GreenLine Energy</title>
        <meta name="description" content="Upgrade to an ultra-efficient heat pump hot water system and save up to 80% on costs. GreenLine Energy helps you access VEU, federal, and state rebates in Victoria & NSW." />
        <meta name="keywords" content="heat pump hot water, VEU rebates, hot water rebate, energy efficient hot water, hot water system Victoria, save on hot water, Ecogenica" />
        <link rel="canonical" href="https://www.glenergy.com.au/hot-water" />
        <meta property="og:title" content="Heat Pump Hot Water Systems | Rebates & Savings | GreenLine Energy" />
        <meta property="og:description" content="Upgrade to an ultra-efficient heat pump hot water system and save up to 80% on costs. GreenLine Energy helps you access VEU, federal, and state rebates in Victoria & NSW." />
        <meta property="og:url" content="https://www.glenergy.com.au/hot-water" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/heatpump_installation_greenline-1-6aosh.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Modern heat pump hot water system installed outside a modern home" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/heatpump_installation_greenline-1-6aosh.jpeg" />
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
            Heat Pump Hot Water
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
            The Future of Efficient Hot Water is Here
          </motion.p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Save Big on Your Biggest Energy User</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Water heating is typically the largest single source of energy consumption in a home. A heat pump hot water system works like a refrigerator in reverse, extracting heat from the ambient air to heat your water. This makes them incredibly efficient, saving you up to 80% on your water heating costs.
            </p>
          </section>
          
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Energy-Efficient Hot Water: Rebates & Big Savings</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Switching to a modern heat pump hot water system can slash running costs and emissions—and right now there’s solid support to bring the price down.
            </p>
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
              <h3 className="info-card-title"><Droplets className="h-6 w-6" /> What’s on offer (as of 2025)</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Victoria – Solar Victoria:</strong> Eligible households can get up to $1,000 off solar hot water.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Victoria – VEU program:</strong> Extra discounts for installing energy-efficient electric/heat-pump hot water.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>NSW:</strong> Rebates/discounts available for efficient hot water upgrades, with strong support for heat pump systems.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Nationwide – Federal STCs:</strong> Up-front discount of $800–$2,000+ when combined with state programs.</li>
              </ul>
            </motion.div>
          </section>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
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
              <h3 className="info-card-title"><Zap className="h-6 w-6" /> Why Upgrade?</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> Up to ~70% lower water-heating costs.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Lower carbon emissions and future-proof tech.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Stack multiple incentives (state + federal).</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Quieter, reliable performance with smart scheduling.</li>
              </ul>
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
              <h3 className="info-card-title"><Sun className="h-6 w-6" /> Great System Options</h3>
              <p className="text-gray-300">Rebate-eligible heat pump units from leading brands—including Ecogenica—cover small apartments through to large family homes in VIC and NSW.</p>
              <p className="text-gray-300 mt-4">We’ll confirm your eligibility, maximise incentives, and show a clear after-rebate price—then handle the paperwork and installation.</p>
            </motion.div>
          </div>

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
              <h3 className="info-card-title"><ArrowRightCircle className="h-6 w-6" /> Next Steps with GreenLine</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> Choose the right hot water system for your home.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Maximise your rebates.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Handle all the paperwork.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Install quickly with trusted professionals.</li>
              </ul>
              <p className="text-gray-400 mt-4">At GreenLine, we’re all about providing you crucial information on rebates and energy solutions so you can make the best decision.</p>
            </motion.div>
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
              <h3 className="info-card-title"><HelpCircle className="h-6 w-6" /> Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">What rebates are available for hot water systems in Victoria?</h4>
                  <p className="text-gray-300">
                    Victorian residents can claim up to $1,000 off through Solar Victoria and additional discounts via the Victorian Energy Upgrades (VEU) program for approved heat pump and solar hot water systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Can I claim federal and state rebates together?</h4>
                  <p className="text-gray-300">
                    Yes, in most cases you can combine federal STCs with state rebates to maximise savings.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">What type of hot water system qualifies for rebates?</h4>
                  <p className="text-gray-300">
                    Heat pump and solar hot water systems are typically eligible. Minimal rebates may apply to traditional electric resistance systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">How do I apply for the hot water rebate in Victoria?</h4>
                  <p className="text-gray-300">GreenLine will guide you through the entire process—including checking eligibility, applying for rebates, and completing the installation.</p>
                </div>
              </div>
            </motion.div>
          </section>


          <section className="mt-20 text-center bg-gray-900 p-12 rounded-2xl border border-lime-500/30 shadow-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Upgrade Your Hot Water System Today</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Find out how much you can save by switching to a heat pump. We offer expert installation and access to all available government rebates.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              Get a Quote for a Heat Pump
            </Button>
          </section>
        </div>
      </main>
    </motion.div>;
};
export default HotWater;