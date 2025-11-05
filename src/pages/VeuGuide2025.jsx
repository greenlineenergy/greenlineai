import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, CheckCircle, DollarSign, Gift, Lightbulb, BarChart, Users, FileText, ExternalLink } from 'lucide-react';
const VeuGuide2025 = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const scrollToContact = () => navigate('/#contact');
  const handleMonetizationClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Stripe integration is required to enable this feature."
    });
  };
  const handleAffiliateClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Affiliate integration is required for this feature."
    });
  };
  const contentSections = [{
    id: "what-is-veu",
    title: "What is the Victorian Energy Upgrades (VEU) Program?",
    content: <>
              <p className="mb-4">The Victorian Energy Upgrades scheme is a state government initiative designed to help households and businesses cut down on energy use, lower electricity bills, and reduce carbon emissions. Launched by the Victorian Government, this program incentivizes the replacement of old, inefficient appliances and systems with new, energy-efficient products.</p>
              <p>By participating, you can unlock generous rebates and discounts—making upgrades more affordable than ever. In short: the government pays you to save money on energy bills while upgrading to smarter, greener technology. <a href="https://www.energy.vic.gov.au/for-households/victorian-energy-upgrades-for-households" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline inline-flex items-center">Learn more about VEU on the official site <ExternalLink className="h-4 w-4 ml-1" /></a></p>
            </>
  }, {
    id: "products-covered",
    title: "What Products and Services are Covered?",
    content: <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" /><div><strong>Heat Pump Hot Water Systems:</strong> Replace outdated electric or gas hot water units with a heat pump hot water system. These are up to 70% more efficient and can save hundreds per year on running costs. <Link to="/hot-water" className="text-lime-400 hover:underline">Check our heat pump rebate guide</Link>.</div></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" /><div><strong>Split System Air Conditioning:</strong> Upgrade to an energy-efficient reverse cycle air conditioner for both heating and cooling. Enjoy year-round comfort and lower electricity bills with our <Link to="/air-conditioning" className="text-lime-400 hover:underline">aircon rebate offer</Link>.</div></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" /><div><strong>Solar PV Systems & Batteries:</strong> Through VEU and complementary Solar Victoria rebates, install solar panels and battery storage to generate and store your own clean energy. <Link to="/solar" className="text-lime-400 hover:underline">Explore solar rebates in Melbourne</Link>.</div></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" /><div><strong>Lighting & Appliances:</strong> Swap old halogen downlights or outdated appliances for LED upgrades and efficient models that cut electricity costs instantly.</div></li>
              <li className="flex items-start"><CheckCircle className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" /><div><strong>Business Upgrades:</strong> VEU rebates extend to businesses with upgrades like efficient HVAC systems, refrigeration, and lighting, leading to significant operating cost savings.</div></li>
            </ul>
  }, {
    id: "savings",
    title: "How Much Can You Save?",
    content: <>
              <p className="mb-4">Rebates under the VEU scheme can be worth thousands of dollars. For example:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Up to <strong>$3,200 off</strong> a new energy-efficient hot water system.</li>
                <li>Rebates on air conditioning installations that make upgrades up to <strong>50% cheaper</strong>.</li>
                <li>Solar panel and battery rebates that can slash upfront costs by <strong>several thousand dollars</strong>.</li>
              </ul>
              <p>On top of rebates, your ongoing energy bills drop significantly—giving you double savings: lower installation costs and lower monthly bills.</p>
              <div className="mt-6 bg-gray-800 p-4 rounded-lg text-center">
                <p className="font-semibold text-white">Want to see your potential savings?</p>
                <Button onClick={handleAffiliateClick} className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                  <BarChart className="h-5 w-5 mr-2" />
                  Estimate Your Benefits with SolarQuotes
                </Button>
              </div>
            </>
  }, {
    id: "eligibility",
    title: "Who is Eligible?",
    content: <>
              <p className="mb-4">Most Victorian households and businesses are eligible for VEU rebates. Key requirements include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>The property must be located in Victoria.</li>
                <li>The upgrade must replace an existing, less efficient system.</li>
                <li>Work must be carried out by a VEU-accredited provider like GreenLine Energy.</li>
              </ul>
            </>
  }, {
    id: "why-us",
    title: "Why Choose GreenLine Energy for VEU Upgrades?",
    content: <>
              <p className="mb-4">At GreenLine Energy, we’re not just installers—we’re a VEU-accredited provider with years of experience in helping Victorians maximize government rebates. Here’s why customers choose us:</p>
              <ul className="space-y-3">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-lime-400 mr-2" /><strong>End-to-end service:</strong> From eligibility checks to rebate claims and installation, we handle it all.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-lime-400 mr-2" /><strong>Trusted brands:</strong> We work with Mitsubishi, Emerald, Sungrow, Longi, and more.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-lime-400 mr-2" /><strong>Licensed experts:</strong> Our technicians are fully trained and accredited under the VEU scheme.</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-lime-400 mr-2" /><strong>Transparent pricing:</strong> No hidden fees—just guaranteed savings.</li>
                <li className="flex items-center"><Gift className="h-5 w-5 text-lime-400 mr-2" /><strong>Referral Rewards:</strong> Earn $200 cash when you refer a friend, plus they get $200 off their upgrade. <Link to="/referral" className="text-lime-400 hover:underline ml-1">Learn more</Link>.</li>
              </ul>
            </>
  }, {
    id: "how-to-apply",
    title: "How to Apply for VEU Rebates",
    content: <>
              <p className="mb-6">Getting started is simple with GreenLine Energy:</p>
              <ol className="space-y-4">
                <li className="flex items-start"><strong className="text-lime-400 text-2xl font-bold mr-3">1.</strong><div><strong>Check your eligibility:</strong> Contact us, and we’ll confirm which rebates you qualify for.</div></li>
                <li className="flex items-start"><strong className="text-lime-400 text-2xl font-bold mr-3">2.</strong><div><strong>Get a free quote:</strong> We’ll recommend the best energy-efficient system for your home or business.</div></li>
                <li className="flex items-start"><strong className="text-lime-400 text-2xl font-bold mr-3">3.</strong><div><strong>Claim your rebate:</strong> Our team manages the paperwork and applies your discount upfront.</div></li>
                <li className="flex items-start"><strong className="text-lime-400 text-2xl font-bold mr-3">4.</strong><div><strong>Enjoy lower bills:</strong> Save money from day one with your new efficient system.</div></li>
              </ol>
              <div className="mt-8 text-center">
                <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
                  Get Your Free Quote Now – Save up to $3,200!
                </Button>
              </div>
            </>
  }];
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="bg-dark-background text-light-text">
          <Helmet>
            <title>The Ultimate Guide to Victorian Energy Upgrades (VEU) | GreenLine Energy</title>
            <meta name="description" content="Save up to $3,200 with Victorian Energy Upgrades (VEU). Get rebates on solar, heat pumps & air conditioning. GreenLine Energy handles it all." />
            <meta name="keywords" content="Victorian Energy Upgrades, VEU rebates, VEU program, solar rebates Melbourne, heat pump hot water rebate, split system air conditioning rebate, government energy rebates Victoria, save on energy bills Victoria, GreenLine Energy VEU accredited provider" />
            <link rel="canonical" href="https://glenergy.com.au/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025" />
            <meta property="og:title" content="The Ultimate Guide to Victorian Energy Upgrades (VEU) | GreenLine Energy" />
            <meta property="og:description" content="Save up to $3,200 with Victorian Energy Upgrades (VEU). Get rebates on solar, heat pumps & air conditioning. GreenLine Energy handles it all." />
            <meta property="og:url" content="https://www.glenergy.com.au/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025" />
            <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/e3f43c7d822690539ab87f4c9cc44996.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="article" />
          </Helmet>

          <header className="relative py-20 md:py-32 text-white text-center overflow-hidden">
            <img class="absolute inset-0 w-full h-full object-cover -z-10" alt="Victorian home with solar panels in 2025" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-oct-6-2025-10_16_24-am-1-1-qj8ZT.png" />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-3xl md:text-5xl font-bold leading-tight" style={{
          textShadow: '0 0 10px #26A69A'
        }}>
                The Ultimate Guide to Victorian Energy Upgrades (VEU)
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
        }} className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                How to Save Big on Energy Bills in 2025
              </motion.p>
            </div>
          </header>

          <main className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700 mb-12">
                <p className="text-lg">If you live in Victoria, you’ve probably heard about the Victorian Energy Upgrades program (VEU). But do you know how much money you could actually save by upgrading your home or business with government-backed rebates?</p>
                <p className="mt-4 text-lg">In this article, we’ll break down everything you need to know about VEU rebates, including what they cover, how to apply, and why now is the best time to take advantage of these government energy upgrades. Let’s dive in!</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-12">
                  {contentSections.map(section => <motion.section key={section.id} id={section.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }}>
                      <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6 pb-2 border-b-2 border-lime-500/20">{section.title}</h2>
                      <div className="prose prose-lg text-light-text max-w-none">{section.content}</div>
                    </motion.section>)}
                </div>

                <aside className="lg:col-span-4 lg:sticky top-24 self-start space-y-8">
                  <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }} className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4">Ad Placeholder</h3>
                    <div className="bg-gray-800 w-full h-64 flex items-center justify-center rounded-lg">
                      <p className="text-gray-500">Ad (300x250)</p>
                    </div>
                  </motion.div>
                  <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7,
              delay: 0.2
            }} className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      {contentSections.map(s => <li key={`link-${s.id}`}><a href={`#${s.id}`} className="text-gray-300 hover:text-lime-400 transition-colors flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-lime-500" />{s.title}</a></li>)}
                    </ul>
                  </motion.div>
                </aside>
              </div>

              <motion.section initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="mt-20 text-center bg-gray-900 p-8 md:p-12 rounded-2xl border border-lime-500/30 shadow-glow">
                <h2 className="text-3xl font-bold text-white mb-4">Don’t Miss Out on VEU Rebates in 2025</h2>
                <p className="text-lg max-w-3xl mx-auto mb-8">The Victorian Energy Upgrades program is one of the best opportunities to save money, cut energy bills, and future-proof your home. With rebates worth thousands available, there’s never been a better time to upgrade. Don’t wait—act now to lock in these savings!</p>
                <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Ready to start saving? Get your free quote!
                </Button>
              </motion.section>
            </div>
          </main>

          <div className="bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ad Placeholder</h3>
              <div className="bg-gray-800 max-w-2xl mx-auto h-24 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">Ad (728x90)</p>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-brand-slate p-3 text-center z-50 border-t-2 border-brand-teal shadow-lg md:hidden">
            <Button onClick={handleMonetizationClick} className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold">
              <FileText className="h-5 w-5 mr-2" />
              Download Your $4.99 VEU Tracker PDF
            </Button>
          </div>
          
          <footer className="bg-gray-900 text-center py-4 mt-16 md:mt-0">
            <p className="text-sm text-gray-500">© 2025 GreenLine Energy Pty Ltd. ABN: 71 691 300 697.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-lime-400">Privacy Policy</Link>
              <Link to="/contact" className="text-xs text-gray-400 hover:text-lime-400">Contact Us</Link>
            </div>
            <p className="text-xs text-gray-600 mt-2 px-4">Disclaimer: Information is for guidance only. Always verify with official sources.</p>
          </footer>
        </motion.div>;
};
export default VeuGuide2025;