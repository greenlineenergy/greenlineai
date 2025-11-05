import React from 'react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const faqs = [{
    question: "Am I eligible for a rebate?",
    answer: "Most homeowners in VIC & QLD are! Eligibility depends on your property, income (for some rebates), and existing appliances. Our free audit confirms exactly what you can claim, maximizing your savings."
  }, {
    question: "Is there an upfront cost?",
    answer: "For many of our most popular upgrades, like LED lighting, the rebates cover the entire cost, including installation. For larger projects, the rebate acts as a massive upfront discount."
  }, {
    question: "How long does the process take?",
    answer: "From audit to installation, most upgrades are completed within 1-2 weeks. We handle all the paperwork to make it fast and hassle-free for you."
  }, {
    question: "Why are these rebates offered?",
    answer: "State governments offer these incentives to help households reduce energy consumption and lower carbon emissions. It's a win-win for your wallet and the environment."
  }];
  return <div className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Answering Your Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-dark-background p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-lime-400 mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>)}
        </div>
      </div>
    </div>;
};

export default FaqSection;