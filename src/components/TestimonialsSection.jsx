import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Our electricity bills have been cut by more than half since GreenLine installed our new heat pump. The process was seamless and the team was incredibly professional. Highly recommend!",
      name: "Sarah J.",
      location: "Melbourne, VIC",
      rating: 5,
    },
    {
      quote: "I was eligible for a huge VEU rebate thanks to GreenLine Energy. They handled all the paperwork and made upgrading my old air conditioner so affordable. My home has never been more comfortable.",
      name: "David L.",
      location: "Geelong, VIC",
      rating: 5,
    },
    {
      quote: "From the initial quote to the final installation of our solar panels, the service was top-notch. The team explained everything clearly and now we're generating our own clean energy. Fantastic!",
      name: "Emily R.",
      location: "Ballarat, VIC",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-light-text max-w-3xl mx-auto">
            Real stories from homeowners who are saving money and energy with our help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-light-text italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="bg-gray-700 rounded-full p-2 mr-4">
                  <User className="h-6 w-6 text-lime-400" />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;