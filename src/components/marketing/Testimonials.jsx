import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare as MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [{
    quote: "Saved $1,200 on my first upgrade! The GreenLine team handled everything. So easy.",
    name: "Sarah K.",
    location: "Melbourne",
    image: "A smiling woman in her 30s in a modern kitchen",
    imgSrc: "/assets/testimonial-1.webp"
  }, {
    quote: "I was shocked at how much I was eligible for. My winter heating bill is tiny now!",
    name: "Mike P.",
    location: "Geelong",
    image: "A happy man in his 50s standing in front of his house",
    imgSrc: "/assets/testimonial-2.webp"
  }, {
    quote: "The free audit was so helpful. They found savings I didn't even know existed. Highly recommend!",
    name: "Jessica T.",
    location: "Ballarat",
    image: "A young professional woman smiling confidently",
    imgSrc: "/assets/testimonial-3.webp"
  }];
  return <div className="py-16 bg-dark-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Proof from Real Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.5,
          delay: index * 0.15
        }} className="bg-gray-900 p-8 rounded-2xl border border-gray-700/50 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-lime-400">
                <img 
                  class="w-full h-full object-cover" 
                  alt={testimonial.name}
                  loading="lazy"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <MessageSquareQuote className="w-8 h-8 text-lime-400 mb-4" />
              <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
              <p className="font-bold text-white">{testimonial.name}, <span className="font-normal text-gray-400">{testimonial.location}</span></p>
            </motion.div>)}
        </div>
      </div>
    </div>;
};

export default Testimonials;