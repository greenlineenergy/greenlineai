import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import HeroSection from '@/components/HeroSection';
import HeroImage from '@/components/HeroImage';
import BigNumbers from '@/components/BigNumbers';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import ReferralBanner from '@/components/ReferralBanner';
import WelcomeMessage from '@/components/WelcomeMessage';
import BlogSection from '@/components/BlogSection';
import CombinedCta from '@/components/CombinedCta';
import ContactSection from '@/components/ContactSection';

const Home = ({ onReferralOpen }) => {
  const previewImageUrl = "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/ba73c24d322584d01517759472608fd1.png?v=20251023_0709";

  return (
    <>
      <Helmet>
        <title>GreenLine Energy Pty Ltd — Official Site | Melbourne VEU Rebates, Heating, Cooling & Solar</title>
        <meta name="description" content="GreenLine Energy is Melbourne’s official VEU-accredited provider. Save up to $9,900 with combined government rebates on heat pump hot water, reverse cycle air conditioning, solar + battery, and hydronic heating. Trusted local experts. Call 13000 24-7 67." />
        <link rel="canonical" href="https://www.glenergy.com.au" />
        
        {/* Open Graph / Social */}
        <meta property="og:title" content="GreenLine Energy Pty Ltd — Official Site | Melbourne VEU Rebates, Heating, Cooling & Solar" />
        <meta property="og:description" content="GreenLine Energy is Melbourne’s official VEU-accredited provider. Save up to $9,900 with combined government rebates on heat pump hot water, reverse cycle air conditioning, solar + battery, and hydronic heating. Trusted local experts. Call 13000 24-7 67." />
        <meta property="og:url" content="https://www.glenergy.com.au/" />
        <meta property="og:image" content={previewImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt" content="GreenLine Energy Home with logo and tagline 'Powering Australia's Clean Energy Future'" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GreenLine Energy Pty Ltd — Official Site | Melbourne VEU Rebates, Heating, Cooling & Solar" />
        <meta name="twitter:description" content="GreenLine Energy is Melbourne’s official VEU-accredited provider. Save up to $9,900 with combined government rebates on heat pump hot water, reverse cycle air conditioning, solar + battery, and hydronic heating. Trusted local experts. Call 13000 24-7 67." />
        <meta name="twitter:image" content={previewImageUrl} />
        <meta name="twitter:image:alt" content="GreenLine Energy Home with logo and tagline 'Powering Australia's Clean Energy Future'" />

        {/* Cache Busting */}
        <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="pragma" content="no-cache" />
      </Helmet>
      <div className="flex flex-col">
        <HeroSection />
        <HeroImage />
        <BigNumbers />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ReferralBanner onReferralOpen={onReferralOpen} />
        <BlogSection />
        <PartnersSection />
        <WelcomeMessage />

        <CombinedCta />
        <ContactSection />

      </div>
    </>
  );
};

export default Home;