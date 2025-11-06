import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '10 Incredible Benefits of Solar Power for Homes and Businesses',
    excerpt: 'Learn how solar energy saves money, protects the environment, and builds energy independence.',
    link: '/10-incredible-benefits-of-solar-power',
    imageAlt: 'Solar power benefits thumbnail by GreenLine Energy',
    imageUrl: 'https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/d7a8fa583eef0645f525bbfc3bb033bf.png'
  },
  {
    title: 'The Ultimate Guide to Victorian Energy Upgrades (VEU)',
    excerpt: 'How to save big on energy bills in 2025 with government rebates on solar, heat pumps & air conditioning.',
    link: '/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025',
    imageAlt: 'A modern home with solar panels on the roof under a clear blue sky.',
    imageUrl: 'https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-oct-3-2025-10_50_37-am-1-kmMGs.png'
  },
  {
    title: 'VEU Ceiling Insulation Incentive: Save Big in 2026',
    excerpt: 'Discover how to slash your energy bills and boost your home’s comfort with the upcoming VEU Ceiling Insulation Incentive.',
    link: '/veu-ceiling-insulation',
    imageAlt: 'A cozy, well-insulated home attic showing the benefits of proper insulation.',
    imageUrl: 'https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/f0d6abd5cc26b14ed1afed9a2b9192a1.png'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const BlogSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-text mb-4">
            From Our Blog
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news, guides, and tips on energy efficiency and government rebates.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-brand-teal/50 transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="relative">
                <img className="w-full h-56 object-cover" alt={post.imageAlt} src={post.imageUrl} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>
                <div className="mt-auto">
                  <Button asChild className="btn-secondary w-full md:w-auto">
                    <Link to={post.link}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;