import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Globe, Search, Instagram, Facebook, MessageSquare } from 'lucide-react';

const UTM_PARAMS = '?utm_source=links&utm_medium=microhub&utm_campaign=greenline_links';

const linkSections = [
  {
    title: 'Primary CTAs',
    links: [
      {
        title: 'Free VEU Eligibility Check',
        url: '/offer',
        description: 'Find out your savings in minutes.',
      },
      {
        title: 'Book a Quote',
        url: '/offer',
        description: 'Get a no-obligation quote from our experts.',
      },
      {
        title: 'Refer a Friend – Get $200',
        url: '/referral',
        description: 'Share the savings and get rewarded.',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        title: 'Heat Pump Hot Water (VEU)',
        url: '/hot-water',
        description: 'Cut hot water costs with efficient heat pumps + rebates.',
      },
      {
        title: 'Reverse-Cycle Air-Conditioning',
        url: '/air-conditioning',
        description: 'Efficient heating & cooling for year-round comfort.',
      },
      {
        title: 'Solar PV & Batteries',
        url: '/solar',
        description: 'Lower bills & generate clean energy.',
      },
      {
        title: 'Insulation (Ceiling/Attic)',
        url: '/veu-ceiling-insulation',
        description: 'Improve comfort and reduce energy loss.',
      },
      {
        title: 'EV Charging',
        url: 'https://www.glenergy.com.au/services/ev-charging',
        description: 'Charge at home the smart way.',
      },
    ],
  },
  {
    title: 'Blogs & Guides',
    links: [
      {
        title: 'Guide: Victorian Energy Upgrades (VEU) Explained',
        url: '/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025',
        isNew: true,
      },
      {
        title: 'Heat Pump vs Gas: True Cost Over 5 Years',
        url: 'https://www.glenergy.com.au/blog/heat-pump-vs-gas',
      },
      {
        title: 'Solar + Battery Payback in Victoria',
        url: 'https://www.glenergy.com.au/blog/solar-battery-payback',
      },
      {
        title: 'Choosing the Right Reverse-Cycle AC',
        url: 'https://www.glenergy.com.au/blog/choose-reverse-cycle-ac',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About GreenLine', url: 'https://www.glenergy.com.au/about' },
      { title: 'Careers', url: 'https://www.glenergy.com.au/careers' },
      { title: 'Privacy Policy', url: '/privacy-policy' },
    ],
  },
];

const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/greenlineau', name: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/greenlineau', name: 'Facebook' },
    { icon: MessageSquare, url: 'https://wa.me/61436603715', name: 'WhatsApp' },
];


const LinkButton = ({ link }) => (
  <motion.a
    href={`${link.url}${link.url.startsWith('http') ? UTM_PARAMS : ''}`}
    target={link.url.startsWith('http') ? '_blank' : '_self'}
    rel="noopener noreferrer"
    className="block w-full bg-gray-800/50 border border-gray-700 rounded-2xl p-4 text-left transition-all duration-300 hover:bg-gray-700/70 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-lime-400"
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    data-ga-click={link.title}
  >
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-bold text-white flex items-center">
          {link.title}
          {link.isNew && (
            <span className="ml-2 text-xs font-semibold bg-lime-500 text-black px-2 py-0.5 rounded-full">NEW</span>
          )}
        </h3>
        {link.description && <p className="text-sm text-gray-400 mt-1">{link.description}</p>}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  </motion.a>
);

const LinksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const logoUrl = "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/0e1d92a4598a6175ce07c5b2acf31d74.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSections = linkSections
    .map(section => {
      const filteredLinks = section.links.filter(link =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (link.description && link.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return { ...section, links: filteredLinks };
    })
    .filter(section => section.links.length > 0);

  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <Helmet>
        <title>GreenLine Links | All Our Services, Blogs & Offers</title>
        <meta name="description" content="Explore GreenLine Energy’s services, rebates, and guides. Check VEU eligibility, book a quote, and read our latest blogs." />
        <meta property="og:title" content="GreenLine Links | All Our Services, Blogs & Offers" />
        <meta property="og:description" content="Explore GreenLine Energy’s services, rebates, and guides." />
        <meta property="og:url" content="https://www.glenergy.com.au/links" />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <style>{`
          body { background-color: #000; }
          .links-bg-pattern {
            background-image: radial-gradient(circle at 1px 1px, rgba(166, 255, 0, 0.1) 1px, transparent 0);
            background-size: 20px 20px;
          }
        `}</style>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "GreenLine Links | All Our Services, Blogs & Offers",
            "url": "https://www.glenergy.com.au/links",
            "description": "Explore GreenLine Energy’s services, rebates, and guides. Check VEU eligibility, book a quote, and read our latest blogs.",
            "publisher": {
              "@type": "Organization",
              "name": "GreenLine Energy Pty Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "${logoUrl}"
              }
            }
          }
        `}</script>
      </Helmet>

      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-gray-800 z-50"
          >
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="GreenLine Energy Logo" className="h-8 w-8" />
                <span className="font-bold text-sm">GreenLine Energy</span>
              </div>
              <a href="/offer" className="bg-lime-500 text-black text-xs font-bold px-3 py-1.5 rounded-full hover:bg-lime-400 transition-colors">
                Check Eligibility
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="links-bg-pattern relative z-10">
        <header className="text-center pt-12 pb-8 px-4">
          <img src={logoUrl} alt="GreenLine Energy Logo" className="h-24 w-24 mx-auto mb-4 rounded-full shadow-lg shadow-lime-500/20" />
          <h1 className="text-2xl font-bold text-white">GreenLine Energy</h1>
          <p className="text-gray-400 mt-1">Your key to a greener, more comfortable home.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
            <a href="tel:1300024767" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-lime-500 text-black font-bold py-3 px-6 rounded-full transition-transform hover:scale-105">
              <Phone size={18} /> Call 13000 24-7 67
            </a>
            <a href="https://www.glenergy.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full border border-gray-700 transition-transform hover:scale-105">
              <Globe size={18} /> Visit glenergy.com.au
            </a>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 pb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Find a link..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div className="space-y-8">
            <AnimatePresence>
              {filteredSections.map(section => (
                <section key={section.title}>
                  <h2 className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-4">{section.title}</h2>
                  <div className="space-y-3">
                    {section.links.map(link => (
                      <LinkButton key={link.title} link={link} />
                    ))}
                  </div>
                </section>
              ))}
            </AnimatePresence>
          </div>
          
          <section className="mt-12">
             <h2 className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-4 text-center">Connect with us</h2>
             <div className="flex justify-center gap-6">
                {socialLinks.map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 hover:scale-110 transition-all" aria-label={social.name}>
                        <social.icon size={24} />
                    </a>
                ))}
             </div>
          </section>

        </main>

        <footer className="text-center py-8 px-4 border-t border-gray-900">
          <p className="text-sm text-gray-500">Victoria, Australia</p>
          <p className="text-xs text-gray-600 mt-2">Copyright © {new Date().getFullYear()} GreenLine Energy Pty Ltd</p>
        </footer>
      </div>
    </div>
  );
};

export default LinksPage;