import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Thermometer, Wind, Zap, CheckCircle, Package, Share2, Layers } from 'lucide-react';
const AirConditioning = () => {
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
        <title>Air Conditioning Installation | Ducted & Multi-Split | GreenLine Energy</title>
        <meta name="description" content="Expert installation of ducted and multi-split air conditioning systems in Victoria. Enjoy whole-home comfort, energy efficiency, and a seamless look with GreenLine Energy." />
        <meta name="keywords" content="ducted air conditioning, multi-split air conditioner, air con installation, Victoria, whole-home comfort, zoning control, energy efficient cooling" />
        <link rel="canonical" href="https://www.glenergy.com.au/air-conditioning" />
        <meta property="og:title" content="Air Conditioning Installation | Ducted & Multi-Split | GreenLine Energy" />
        <meta property="og:description" content="Expert installation of ducted and multi-split air conditioning systems in Victoria. Enjoy whole-home comfort, energy efficiency, and a seamless look with GreenLine Energy." />
        <meta property="og:url" content="https://www.glenergy.com.au/air-conditioning" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/aircon_installation_greenline-1-3IuoF.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img className="absolute inset-0 w-full h-full object-cover -z-10" alt="Modern living room with sleek air conditioning unit" src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/aircon_installation_greenline-1-3IuoF.jpeg" />
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
            Advanced Air Conditioning
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
            Customised Comfort for Your Home
          </motion.p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Ducted Air Conditioning Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Ducted Air Conditioner Installation — Victoria</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Enjoy whole-home comfort with a ducted system that delivers even temperatures, smart zoning, and a clean, seamless look.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
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
            }} className="info-card h-full">
                <h3 className="info-card-title"><Zap className="h-6 w-6" /> Why Ducted?</h3>
                <ul className="info-card-list space-y-3">
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Whole-home comfort:</strong> Consistent temperatures in every room.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Low-profile design:</strong> Discreet ceiling grilles that blend in.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Energy smart:</strong> Modern, high-efficiency systems lower running costs.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Zoning control:</strong> Set different temps for different areas.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Quiet operation:</strong> Noisy components sit outside or in roof spaces.</li>
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
            }} className="info-card h-full">
                <h3 className="info-card-title"><Layers className="h-6 w-6" /> How It Works & Key Components</h3>
                <p className="text-gray-300 mb-4">
                  A central indoor unit conditions the air and pushes it through insulated ducts to room supply grilles, while a return air grille draws air back for reconditioning. A wall thermostat manages temperature and zones.
                </p>
                <ul className="info-card-list space-y-3 text-sm">
                   <li><Package className="h-5 w-5 icon" /> <strong>Evaporator (indoor):</strong> Absorbs heat from indoor air.</li>
                   <li><Package className="h-5 w-5 icon" /> <strong>Compressor & Condenser (outdoor):</strong> Manages refrigerant and rejects heat.</li>
                   <li><Share2 className="h-5 w-5 icon" /> <strong>Duct Network:</strong> Distributes conditioned air.</li>
                   <li><Wind className="h-5 w-5 icon" /> <strong>Return Air Grille:</strong> Recirculates room air.</li>
                   <li><Thermometer className="h-5 w-5 icon" /> <strong>Controllers:</strong> Simple, zone-aware temperature control.</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Multi-Split Air Conditioning Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Multi-Split Air Conditioner Installation — Victoria</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Targeted comfort for multiple rooms with just one outdoor unit—flexible, efficient, and tidy. One outdoor unit connects to several indoor units, and each runs independently for perfect settings everywhere.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
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
            }} className="info-card h-full">
                <h3 className="info-card-title"><Zap className="h-6 w-6" /> Advantages of Multi-Split</h3>
                <ul className="info-card-list space-y-3">
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Independent control:</strong> Different temperatures for different rooms.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Space saving:</strong> One outdoor unit preserves your façade and yard.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Energy efficiency:</strong> Inverter tech matches demand to save power.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Quiet indoors:</strong> Outdoor unit handles the heavy lifting.</li>
                  <li><CheckCircle className="h-5 w-5 icon" /> <strong>Design flexibility:</strong> Choose indoor styles to suit each room.</li>
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
            }} className="info-card h-full">
                <h3 className="info-card-title"><Layers className="h-6 w-6" /> How It Works</h3>
                <p className="text-gray-300 mb-4">
                  A single, powerful outdoor unit houses the compressor and condenser, serving all connected rooms.
                </p>
                <p className="text-gray-300">
                  Individual indoor 'heads' (wall-mounted, ceiling cassettes, etc.) in selected rooms deliver heating or cooling on demand, each with its own controller for personalized comfort.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="mt-20 text-center bg-gray-900 p-12 rounded-2xl border border-lime-500/30 shadow-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Choose Your Ideal Comfort?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you want whole-home coverage (ducted) or room-by-room control (multi-split), we’ll size the right system, plan a clean installation, and set up intuitive controls.
            </p>
            <Button onClick={scrollToContact} className="btn-primary text-lg px-8 py-4">
              Get My Free Quote
            </Button>
          </section>
        </div>
      </main>
    </motion.div>;
};
export default AirConditioning;