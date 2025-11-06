import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
const BarChart = () => <div className="w-full max-w-md mx-auto mt-8 text-white">
    <div className="flex justify-around items-end h-64">
      <div className="flex flex-col items-center w-1/3">
        <motion.div initial={{
        height: 0
      }} whileInView={{
        height: '100%'
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className="w-16 bg-[#228B22] rounded-t-lg flex items-end justify-center">
          <span className="text-lg font-bold transform -rotate-90 origin-center mb-8 whitespace-nowrap">$3,000</span>
        </motion.div>
        <p className="mt-2 text-sm font-semibold">Before Incentive</p>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <motion.div initial={{
        height: 0
      }} whileInView={{
        height: '50%'
      }} transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 0.3
      }} className="w-16 rounded-t-lg flex items-end justify-center" style={{
        backgroundColor: '#32CD32'
      }}>
          <span className="text-lg font-bold transform -rotate-90 origin-center mb-8 whitespace-nowrap">$1,500</span>
        </motion.div>
        <p className="mt-2 text-sm font-semibold">After Incentive</p>
      </div>
    </div>
  </div>;
const VeuInsulation = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const getStartedRef = useRef(null);
  const scrollToGetStarted = () => {
    getStartedRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    toast({
      title: 'Assessment Request Sent!',
      description: "We've received your request. We'll be in touch soon!"
    });
    setTimeout(() => navigate('/thank-you'), 1500);
  };
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
        <title>VEU Ceiling Insulation Incentive | GreenLine Energy</title>
        <meta name="description" content="Discover how to slash your energy bills with the VEU Ceiling Insulation Incentive, launching early 2026. Save up to 50% on installation costs." />
        <style>{`
          body { font-family: Arial, sans-serif; }
        `}</style>
        <meta property="og:title" content="VEU Ceiling Insulation Incentive | GreenLine Energy" />
        <meta property="og:description" content="Discover how to slash your energy bills with the VEU Ceiling Insulation Incentive, launching early 2026. Save up to 50% on installation costs." />
        <meta property="og:url" content="https://www.glenergy.com.au/veu-ceiling-insulation" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/f0d6abd5cc26b14ed1afed9a2b9192a1.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="bg-[#000000] py-4 text-center">
        <h1 className="text-2xl font-bold text-white">VEU Ceiling Insulation Incentive</h1>
        <p className="text-md text-white">Discover How to Slash Your Energy Bills Starting Early 2026!</p>
      </header>

      <main>
        {/* Hero Section (Hook) */}
        <section className="relative h-[80vh] flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Cozy, well-insulated home with lush greenery outside" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-oct-3-2025-05_25_04-pm-1-bUsuX.png" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Imagine a Warmer, Greener Home – Up to 50% Off!</h2>
            <p className="text-lg text-gray-200 mb-8">
              Are you tired of sky-high energy bills and shivering winters? With the new VEU Ceiling Insulation Incentive, you can cut costs by $300–$400 a year and boost your home’s comfort. This government-backed rebate is your ticket to a sustainable future—starting early 2026!
            </p>
            <Button onClick={scrollToGetStarted} className="btn-primary text-lg px-8 py-4">
              Claim Your Savings Now! <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="bg-[#f5f5f5] text-black py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Your Journey to a Greener Home Starts Here</h2>
            <p className="text-lg" style={{
            fontSize: '1.1em'
          }}>
              Picture this: Last winter, thousands of Victorians faced freezing homes and bills that wouldn’t quit. But now, the VEU program—partnered with GreenLine—is changing the game. With up to $1,500 off insulation, you’re not just saving money—you’re reclaiming comfort and health (up to $850 in health benefits!). Join the movement for a renewable Victoria.
            </p>
          </div>
        </section>

        {/* Details Section (Sell - Benefits) */}
        <section className="bg-[#000000] py-16 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Why You Can’t Wait to Upgrade with GreenLine</h2>
            <BarChart />
            <ul className="mt-12 space-y-4 text-left text-gray-200 max-w-md mx-auto">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#32CD32] mr-2 mt-1 flex-shrink-0" /><strong>50% Rebate:</strong> Slash installation costs from $3,000 to $1,500!</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#32CD32] mr-2 mt-1 flex-shrink-0" /><strong>Huge Savings:</strong> Pocket $300–$400 annually on bills.</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#32CD32] mr-2 mt-1 flex-shrink-0" /><strong>Health Boost:</strong> Save up to $850/year with a cozier home.</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#32CD32] mr-2 mt-1 flex-shrink-0" /><strong>Green Impact:</strong> Power Victoria’s renewable goals.</li>
            </ul>
          </div>
        </section>

        {/* How It Works Section (Sell - Process) */}
        <section className="bg-[#333333] py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">3 Simple Steps to a Greener Home</h2>
            <ol className="space-y-6 text-left text-gray-200 max-w-md mx-auto">
              <li className="flex items-start"><strong className="text-[#32CD32] text-2xl font-bold mr-3">1.</strong><div><strong>Free Assessment:</strong> Unlock your eligibility with a VEU assessor via GreenLine.</div></li>
              <li className="flex items-start"><strong className="text-[#32CD32] text-2xl font-bold mr-3">2.</strong><div><strong>Expert Installation:</strong> Book a certified pro to transform your home.</div></li>
              <li className="flex items-start"><strong className="text-[#32CD32] text-2xl font-bold mr-3">3.</strong><div><strong>Enjoy Savings:</strong> Claim your rebate and feel the difference!</div></li>
            </ol>
          </div>
        </section>

        {/* Get Started Section (Call to Action) */}
        <section ref={getStartedRef} className="bg-[#000000] py-20 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Don’t Miss Out – Act Today with GreenLine!</h2>
            <p className="text-gray-200 mb-8">
              Spots are limited, and the program launches early 2026. Secure your free assessment now or visit <a href="https://energy.vic.gov.au/victorian-energy-upgrades" target="_blank" rel="noopener noreferrer" className="underline text-[#32CD32] hover:text-[#228B22]">energy.vic.gov.au</a> for more. Let’s make your home energy-smart together!
            </p>
            <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" required className="w-full p-3 bg-transparent border border-[#666666] rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#32CD32] focus:border-transparent" />
                <input type="email" placeholder="Your Email" required className="w-full p-3 bg-transparent border border-[#666666] rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#32CD32] focus:border-transparent" />
                <Button type="submit" className="btn-primary w-full text-lg px-8 py-4">
                  Get Your Free Assessment Now! <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] py-6 text-center border-t border-gray-800">
        <p className="text-sm text-gray-400">&copy; 2025 GreenLine Solutions. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://energy.vic.gov.au/victorian-energy-upgrades" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-[#32CD32]">
            Learn More at Official VEU Site
          </a>
          <Link to="/veu-ceiling-insulation" className="text-sm hover:underline text-[#32CD32]">
            Explore Our Insulation Solutions
          </Link>
        </div>
      </footer>
    </motion.div>;
};
export default VeuInsulation;