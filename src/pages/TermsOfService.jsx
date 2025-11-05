import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | GreenLine Energy</title>
        <meta name="description" content="Read the Terms of Service for GreenLine Energy Pty Ltd. Understand the terms and conditions for using our website and services." />
        <meta property="og:title" content="Terms of Service | GreenLine Energy" />
        <meta property="og:description" content="Read the Terms of Service for GreenLine Energy Pty Ltd. Understand the terms and conditions for using our website and services." />
        <meta property="og:url" content="https://www.glenergy.com.au/terms-of-service" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-12_14_09-pm-1-1-aNiRe.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-light-text"
      >
        <h1 className="text-4xl font-bold text-gradient mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-300 prose prose-invert prose-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-2xl font-bold text-white pt-4">1. Terms</h2>
          <p>By accessing the website at this domain, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          <h2 className="text-2xl font-bold text-white pt-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on GreenLine Energy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

          <h2 className="text-2xl font-bold text-white pt-4">3. Disclaimer</h2>
          <p>The materials on GreenLine Energy's website are provided on an 'as is' basis. GreenLine Energy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2 className="text-2xl font-bold text-white pt-4">4. Limitations</h2>
          <p>In no event shall GreenLine Energy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GreenLine Energy's website.</p>
          
          <h2 className="text-2xl font-bold text-white pt-4">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Victoria, Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfService;