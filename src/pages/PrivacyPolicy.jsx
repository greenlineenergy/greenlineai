import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | GreenLine Energy</title>
        <meta name="description" content="Read the Privacy Policy for GreenLine Energy Pty Ltd. Understand how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy | GreenLine Energy" />
        <meta property="og:description" content="Read the Privacy Policy for GreenLine Energy Pty Ltd. Understand how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://www.glenergy.com.au/privacy-policy" />
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
        <h1 className="text-4xl font-bold text-gradient mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-300 prose prose-invert prose-lg">
          <p>Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p>GreenLine Energy Pty Ltd ("us", "we", or "our") operates the website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

          <h2 className="text-2xl font-bold text-white pt-4">Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, and phone number when you fill out a contact or assessment form.</p>

          <h2 className="text-2xl font-bold text-white pt-4">Use of Data</h2>
          <p>GreenLine Energy uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to provide customer care and support, and to provide analysis or valuable information so that we can improve the Service.</p>

          <h2 className="text-2xl font-bold text-white pt-4">Data Security</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          
          <h2 className="text-2xl font-bold text-white pt-4">Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          
          <h2 className="text-2xl font-bold text-white pt-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us by email at contact@GLEnergy.com.au.</p>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;