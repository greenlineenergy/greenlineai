import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ReferralBanner = ({
  onReferralOpen
}) => {
  return <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-dark-background rounded-3xl shadow-glow p-8 md:p-12 lg:p-16">
          <div className="absolute top-0 left-0 w-full h-full gradient-bg opacity-10 rounded-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            ease: 'easeOut'
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-lime-500/10 p-3 rounded-full">
                  <Gift className="h-8 w-8 text-lime-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  💸 Get <span className="text-gradient">$300 cash</span> + give a friend a <span className="text-gradient">$200 discount!</span>
                </h2>
              </div>
              <p className="text-lg text-light-text mb-6">Know someone tired of high energy bills? Refer them to us! You’ll give them a $200 discount on their installation, and as a thank-you, we'll send you $200 cash once they're signed up.</p>
              <ul className="text-light-text space-y-3 mb-8">
                <li className="flex items-start"><ChevronsRight className="h-5 w-5 text-lime-400 mr-2 mt-1 flex-shrink-0" /><span><strong>It's simple:</strong> They save. You earn. Win-win.</span></li>
                <li className="flex items-start"><ChevronsRight className="h-5 w-5 text-lime-400 mr-2 mt-1 flex-shrink-0" /><span><strong>Unlimited referrals:</strong> The more friends you help, the more you get rewarded.</span></li>
              </ul>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={onReferralOpen} className="btn-primary px-8 py-4 text-lg">
                  <Users className="h-5 w-5 mr-3" />
                  Refer a Friend Now
                </Button>
              </motion.div>
              <p className="text-sm text-gray-400 mt-4">👉 Turn referrals into real cash + real savings!</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }} viewport={{
            once: true
          }} className="hidden lg:block">
              <img src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/flames-of-fortune_-200-offer-1-1-1-WArV5.png" alt="Hand giving another hand a 100 dollar bill for a successful referral" className="rounded-2xl shadow-2xl object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default ReferralBanner;