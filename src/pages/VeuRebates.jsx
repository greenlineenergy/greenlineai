import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Gift, CheckCircle, FileText, Lightbulb, UserCheck, DollarSign, Sun, Home, Users, BarChart, ArrowRightCircle, HelpCircle, Droplets, Zap, BatteryCharging } from 'lucide-react';
const VeuRebates = () => {
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
        <title>VEU, Solar & Hot Water Rebates | GreenLine Energy</title>
        <meta name="description" content="Unlock thousands in savings with Victorian Energy Upgrades (VEU), Solar Homes Program, and Hot Water rebates. GreenLine Energy is an accredited provider, making your switch to energy-efficient appliances more affordable." />
        <meta name="keywords" content="VEU rebates, Victorian Energy Upgrades, Solar Homes Program, solar panel rebate, hot water rebate, heat pump, government incentives, energy savings, GreenLine Energy, accredited provider" />
        <link rel="canonical" href="https://www.glenergy.com.au/veu-rebates" />
        <meta property="og:title" content="VEU, Solar & Hot Water Rebates | GreenLine Energy" />
        <meta property="og:description" content="Unlock thousands in savings with Victorian Energy Upgrades (VEU), Solar Homes Program, and Hot Water rebates. GreenLine Energy is an accredited provider, making your switch to energy-efficient appliances more affordable." />
        <meta property="og:url" content="https://www.glenergy.com.au/veu-rebates" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-01_19_18-pm-PoM8n.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center text-center text-white">
        <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="A person happily receiving a rebate check" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-01_19_18-pm-PoM8n.png" loading="lazy" />
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
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Victorian Energy Upgrades</motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="mt-4 text-lg sm:text-xl md:text-2xl">Unlock Up to $9,900* in Government Incentives</motion.p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Get Paid to Go Green</h2>
            <p className="text-lg max-w-3xl mx-auto">
              The Victorian Energy Upgrades (VEU) program provides rebates to help Victorian households and businesses switch to energy-efficient products. As an accredited provider, GreenLine Energy can help you access these incentives, making your upgrade more affordable than ever.
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
              <h2 className="info-card-title"><Lightbulb className="h-6 w-6" /> Victorian Energy Upgrades Rebates</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What is the Victorian Energy Upgrade Program?</h3>
                  <p className="text-gray-300">
                    The Victorian Energy Upgrades (VEU) scheme allows Authorised Providers (APs) to offer incentives for upgrading to energy-efficient air conditioning systems in Victoria. When GreenLine Energy installs or upgrades an air conditioning system, businesses and households can receive rebates for enhancing the energy efficiency of their units.
                  </p>
                  <p className="text-gray-300 mt-2">
                    Upgrading air conditioning systems may involve replacing gas heaters with reverse cycle air conditioners, optimizing existing systems for improved energy performance, or upgrading from older split systems to more efficient models.
                  </p>
                  <p className="text-gray-300 mt-2">
                    GreenLine Energy will handle all necessary pre-installation checks and post-installation audits to maximize savings when upgrading your air conditioning or heating system. Rebate amounts depend on the type of air conditioner replaced and the efficiency of the new unit. To learn more and receive a quote, contact us today!
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><UserCheck className="h-5 w-5 text-lime-400" /> Who is eligible for a VEU rebate?</h3>
                  <p className="text-gray-300">
                    Every household in Victoria is eligible for rebates under the Victorian Energy Upgrade (VEU) program, regardless of income. To qualify, your property must be over 2 years old, and you must be upgrading an existing heating or cooling system to a more energy-efficient one.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><DollarSign className="h-5 w-5 text-lime-400" /> How much is the rebate?</h3>
                  <p className="text-gray-300 mb-2">
                    The rebate amount varies depending on the type of system being replaced and the new heating or cooling system installed. GreenLine Energy can assist in selecting the most energy-efficient product that provides the highest return. Rebates are deducted from the installation cost. For example:
                  </p>
                  <ul className="info-card-list space-y-2 ml-4">
                    <li><CheckCircle className="h-5 w-5 icon" /> Replacing a gas ducted heater with a reverse cycle ducted system: <strong>$1000 to $4000 rebate.</strong></li>
                    <li><CheckCircle className="h-5 w-5 icon" /> Replacing a gas ducted heater with a reverse cycle multi-split system: <strong>$1000 to $3500 rebate.</strong></li>
                    <li><CheckCircle className="h-5 w-5 icon" /> Replacing a gas space heater with a reverse cycle multi-split system: <strong>$900 to $2000 rebate.</strong></li>
                    <li><CheckCircle className="h-5 w-5 icon" /> Replacing an old split system with a new reverse cycle split system: <strong>$200 to $500 rebate.</strong></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><FileText className="h-5 w-5 text-lime-400" /> How many claims can you make through GreenLine Energy and the VEU?</h3>
                  <p className="text-gray-300">
                    Only one upgrade per house is applicable at the time of writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-lime-400" /> Are businesses, schools and places of worship eligible for the VEU upgrade scheme?</h3>
                  <p className="text-gray-300">
                    Unfortunately, places where business, teaching or worship is undertaken are ineligible for a VEU rebate at this time.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Victoria Solar Rebates — Made Simple (Solar Homes Program)</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              The Solar Homes program is a Victorian Government initiative that helps owner-occupiers make solar and battery systems more affordable. Since 2018 it’s provided rebates for solar panels (PV), solar hot water, and home batteries so households can cut bills, rely less on fossil fuels, and support a cleaner Victoria.
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
              <h3 className="info-card-title"><BarChart className="h-6 w-6" /> Why It Matters</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
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
              <h3 className="info-card-title"><DollarSign className="h-6 w-6" /> How Much Can You Get? (as of 2025)</h3>
              <ul className="info-card-list space-y-3">
                <li><Sun className="h-5 w-5 icon" /> <span><strong>Solar PV Rebate:</strong> Up to $1,400</span></li>
                <li><DollarSign className="h-5 w-5 icon" /> <span><strong>Optional Interest-Free Loan:</strong> Up to $1,400 (matches the rebate)</span></li>
                <li><Sun className="h-5 w-5 icon" /> <span><strong>Solar Hot Water Rebate:</strong> Up to $1,000</span></li>
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
              <h3 className="info-card-title"><Users className="h-6 w-6" /> Who Can Apply?</h3>
              <ul className="info-card-list space-y-3">
                <li><Home className="h-5 w-5 icon" /> <span>You own and live in the property.</span></li>
                <li><DollarSign className="h-5 w-5 icon" /> <span>The property is valued under $3 million.</span></li>
                <li><Users className="h-5 w-5 icon" /> <span>Your combined taxable household income is under $210,000 per year.</span></li>
                <li><CheckCircle className="h-5 w-5 icon" /> <span>The address hasn’t previously received a Solar Homes rebate.</span></li>
                <li><FileText className="h-5 w-5 icon" /> <span>The system is supplied and installed by an approved retailer/installer.</span></li>
              </ul>
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
              <h3 className="info-card-title"><ArrowRightCircle className="h-6 w-6" /> How The Process Works</h3>
              <ol className="relative border-l border-gray-700 space-y-10 pl-6">
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">1. Get a Quote from an Approved Provider</h4>
                  <p className="text-gray-300">We'll help you pick the right system and provide a detailed quote.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">2. Apply for Eligibility via Solar Victoria Portal</h4>
                  <p className="text-gray-300">We guide you through the application process using your quote, ID, and income documents.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">3. Approval Issued & Rebate Deducted</h4>
                  <p className="text-gray-300">Once approved, your installer deducts the rebate from your invoice. You can also add the interest-free loan.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">4. Install and Start Saving</h4>
                  <p className="text-gray-300">Our team installs your new system efficiently, and you begin enjoying lower bills.</p>
                </li>
              </ol>
            </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
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
              <p className="text-gray-400 mt-4">
                At GreenLine, we’re all about providing you crucial information on rebates and energy solutions so you can make the best decision.
              </p>
            </motion.div>
          </section>

          {/* New Battery Rebates Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Cheaper Home Batteries — What You Need to Know (from 1 July 2025)</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Unlock significant savings on home battery systems starting July 1, 2025. These federal incentives make storing your solar energy more affordable than ever.
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
              <h3 className="info-card-title"><BatteryCharging className="h-6 w-6" /> Quick Facts</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Start date:</strong> 1 July 2025</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Discount:</strong> ~30% upfront off eligible home batteries</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>System size:</strong> Batteries with usable capacity &lt; 100 kWh</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Works with:</strong> New or existing solar PV</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Who runs it:</strong> Clean Energy Regulator (CER)</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>How you get it:</strong> Applied at point of sale via accredited retailers/installers</li>
              </ul>
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
              <h3 className="info-card-title"><DollarSign className="h-6 w-6" /> Stack Your Savings</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>Federal:</strong> Updated Small-scale Renewable Energy Scheme (SRES) → upfront discount on batteries</li>
                <li><CheckCircle className="h-5 w-5 icon" /> <strong>STCs:</strong> Ongoing Small-scale Technology Certificates for solar panels (and some battery integrations)</li>
                <li className="ml-6 flex items-start gap-3">
                  <span className="font-semibold text-white block mt-1">State add-ons:</span>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>VIC: Solar Victoria (e.g., $1,400 off solar panels)</li>
                    <li>NSW: Peak Demand Reduction Scheme (battery support; often significant)</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Combined, many households see $800–$2,000+ off, sometimes more with state programs.
              </p>
            </motion.div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
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
              <h3 className="info-card-title"><BarChart className="h-6 w-6" /> Why This Matters</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> Only ~1 in 40 solar homes have a battery—cost has been the blocker.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Upfront discounts help you store daytime solar and use it at night.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Cuts grid reliance and peak-time charges; supports a more stable grid.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Discounts phase down to 2030 as prices fall.</li>
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
              <h3 className="info-card-title"><UserCheck className="h-6 w-6" /> Eligibility (at a glance)</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> Homeowners or small businesses installing approved batteries under 100 kWh.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Installed by accredited retailers/installers.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Safety, standards and documentation must be met.</li>
              </ul>
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
              <h3 className="info-card-title"><ArrowRightCircle className="h-6 w-6" /> How It Works (simple)</h3>
              <ol className="relative border-l border-gray-700 space-y-10 pl-6">
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">1. Quote & Design</h4>
                  <p className="text-gray-300">We size the right battery for your usage.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">2. Eligibility Check</h4>
                  <p className="text-gray-300">We confirm compliance and program rules.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">3. Point-of-Sale Discount</h4>
                  <p className="text-gray-300">The upfront discount is applied directly to your invoice.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">4. Install & Connect</h4>
                  <p className="text-gray-300">Accredited installation, commissioning, and handover.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-dark-background"></div>
                  <h4 className="text-lg font-semibold text-white">5. Start Saving</h4>
                  <p className="text-gray-300">Use your solar at night, smooth bills, add backup (where supported).</p>
                </li>
              </ol>
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
              <h3 className="info-card-title"><CheckCircle className="h-6 w-6" /> Benefits at a Glance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">~30% upfront discount on approved batteries</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Store solar → use at night</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Lower bills and reduce exposure to peak rates</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Government-funded discount (no hidden consumer charges)</span>
                </div>
              </div>
              <p className="text-gray-300 mt-6 text-sm">
                Note: Program settings, rates and caps can change. We’ll confirm your exact eligibility and discount at quoting time.
              </p>
            </motion.div>
          </section>

          {/* Updated FAQ section with battery FAQs */}
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
                  <h4 className="text-lg font-semibold text-white mb-2">Can I get both the solar panel and solar hot water rebate?</h4>
                  <p className="text-gray-300">
                    Yes, eligible households can apply for both, but not for a battery and hot water rebate together.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Who is eligible for the discount?</h4>
                  <p className="text-gray-300">
                    Some rebates are available for rental properties, but eligibility and application processes are different. Contact GreenLine Energy for landlord and rental options.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">How long does approval take?</h4>
                  <p className="text-gray-300">
                    Most applications are processed within a few days to a week, provided all documents are correct.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-700">
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
                {/* New Battery FAQs */}
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">What is the home battery rebate?</h4>
                  <p className="text-gray-300">
                    A federal, CER-administered program delivering upfront battery discounts via accredited sellers from 1 July 2025.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Who can get the battery rebate?</h4>
                  <p className="text-gray-300">
                    Eligible homeowners/small businesses installing compliant batteries under 100 kWh, with new or existing solar.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">How much is the battery discount?</h4>
                  <p className="text-gray-300">
                    About 30% in 2025 (tapering towards 2030). Actual amounts vary by usable capacity and program settings.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Can I combine state rebates with the federal battery discount?</h4>
                  <p className="text-gray-300">
                    Yes—programs like Solar Victoria and NSW PDRS may stack, subject to each scheme’s rules.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">How do I receive the battery rebate?</h4>
                  <p className="text-gray-300">
                    Through accredited installers—the discount is applied directly to your invoice. No separate claim hassle.
                  </p>
                </div>
              </div>
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
              <h3 className="info-card-title"><ArrowRightCircle className="h-6 w-6" /> Next Steps with GreenLine Energy</h3>
              <ul className="info-card-list space-y-3">
                <li><CheckCircle className="h-5 w-5 icon" /> We’ll size the right battery for your home.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Maximise your rebates/discounts.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Handle all the paperwork.</li>
                <li><CheckCircle className="h-5 w-5 icon" /> Deliver a clean, accredited install.</li>
              </ul>
              <p className="text-gray-400 mt-4">
                Want a fast after-rebate price? Contact us for a quick form with instant email confirmation.
              </p>
            </motion.div>
          </section>

          <section className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <Gift className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Significant Discounts</h3>
              <p>Receive substantial upfront discounts on the cost of purchasing and installing new, energy-efficient appliances.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <CheckCircle className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Accredited Provider</h3>
              <p>We are fully accredited to perform VEU-eligible upgrades, ensuring you receive the maximum rebate possible.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <FileText className="h-12 w-12 mx-auto text-lime-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">We Handle the Paperwork</h3>
              <p>Our team takes care of the entire rebate application process for you, making it simple and hassle-free.</p>
            </div>
          </section>

          <section className="mt-20 text-center bg-gray-900 p-12 rounded-2xl border border-lime-500/30 shadow-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Find Out What You're Eligible For</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free assessment. We'll determine which rebates you qualify for and provide a detailed quote for your energy-efficient upgrade.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              Check My Eligibility
            </Button>
          </section>
        </div>
      </main>
    </motion.div>;
};
export default VeuRebates;