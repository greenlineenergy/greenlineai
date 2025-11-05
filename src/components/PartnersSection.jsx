import React from 'react';
import { motion } from 'framer-motion';
const PartnersSection = () => {
  const topPartnerLogos = [{
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/49427a5367e45a99fb8859ae7ac47cff.webp",
    alt: "Fujitsu Logo"
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/456ef01d73a7205f1a8d7ada28bc093a.png",
    alt: "Midea Logo"
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/d8e683bca9ecb5099a91d40cf4c11942.png",
    alt: "Daikin Logo"
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/799ad2429cec85ca0fcc4b08a982602f.png",
    alt: "Panasonic Logo",
    blend: 'multiply'
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/3eaf1f91c6237f5b7313121a211cde6d.png",
    alt: "Mitsubishi Electric Logo"
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/2ff3133d64b5b788f69acd4006c67f30.png",
    alt: "Clean Energy Council Logo"
  }];
  const bottomPartnerLogos = [{
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/5a7d6f1551a23c5794cfc62d6f53c762.png",
    alt: "Sanden Logo",
    blend: 'lighten'
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/8aba53217ab2c329770dc5479fee42cf.png",
    alt: "iStore Logo",
    blend: 'multiply'
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/64060d20e8919480d8ce03c195b40fa2.png",
    alt: "Reclaim Energy Logo",
    blend: 'multiply'
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/0e958ac2cd48a3a7783ff49893f903a6.png",
    alt: "Tesla Powerwall Certified Installer Logo"
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/40f6147f4b57636806da77545178beac.png",
    alt: "Longi Solar Logo",
    blend: 'multiply'
  }, {
    src: "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/ec3861f6fc9f204ed96c7d412204c1e6.jpg",
    alt: "Trina Solar Logo",
    blend: 'multiply'
  }];
  const LogoImage = ({
    logo,
    index
  }) => <motion.img key={index} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className={`col-span-1 max-h-12 w-full object-contain transition-all duration-300 ${logo.blend === 'lighten' ? 'mix-blend-lighten' : logo.blend === 'multiply' ? 'mix-blend-multiply' : ''}`} src={logo.src} alt={logo.alt} width={158} height={48} />;
  return <div className="bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-center text-lg font-semibold leading-8 text-white mb-10">
            Proudly partnering with Australia's leading energy brands
          </h2>
          <div className="bg-lime-500 py-8 rounded-lg space-y-10">
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              {topPartnerLogos.map((logo, index) => <LogoImage key={`top-${index}`} logo={logo} index={index} />)}
            </div>
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              {bottomPartnerLogos.map((logo, index) => <LogoImage key={`bottom-${index}`} logo={logo} index={index} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default PartnersSection;