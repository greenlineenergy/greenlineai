import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, Users, Gift, Zap, CheckCircle, HelpCircle, Copy, Mail, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';

const ReferralLandingPage = () => {
  const { toast } = useToast();
  const [referrals, setReferrals] = useState(3);
  const earnings = referrals * 200;
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:contact@glenergy.com.au?subject=Referral Program Inquiry";
  };

  const faqs = [
    { q: "How do I get paid?", a: "Payments are sent directly to your bank account or via PayPal within 7 days of a successful referral installation." },
    { q: "Do my referrals need to sign a contract?", a: "Your referral just needs to complete a successful energy upgrade with us. There are no long-term contracts for them to worry about." },
    { q: "Is there a catch?", a: "No catch! We're growing fast and would rather pay you for spreading the word than spend on traditional advertising. It's a win-win." },
    { q: "Is there a limit to how much I can earn?", a: "Absolutely not! The more friends you refer who complete an installation, the more you earn. There is no cap." }
  ];

  const testimonials = [
    { quote: "I made $1,000 in a weekend just texting friends – easiest money ever.", name: "Amanda T." },
    { quote: "Greenline paid me the same week! Super fast and reliable.", name: "Jason M." },
    { quote: "Finally, a side hustle that actually pays off. I'm already at $600 this month.", name: "Chloe B." }
  ];

  const trustBadges = [
    { icon: <Users className="h-6 w-6 text-lime-400" />, text: "Trusted by Thousands" },
    { icon: <Zap className="h-6 w-6 text-lime-400" />, text: "Fast, Secure Payouts" },
    { icon: <CheckCircle className="h-6 w-6 text-lime-400" />, text: "No Hidden Fees" }
  ];

  const referralLink = "https://glenergy.com.au/referral?ref=12345";
  const prefilledText = `Hey! Just found out Greenline Energy pays $200 cash per referral – no limit. They help people save big on energy bills. Check it out 👇 ${referralLink}`;
  const whatsappMessage = `Hey! Just found out Greenline Energy pays $200 cash per referral – no limit. I want to get my unique link!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "Copied to clipboard!", description: "Your referral link is ready to be shared." });
  };

  const shareActions = [
    { icon: <MessageSquare className="h-6 w-6" />, name: "Text", href: `sms:?&body=${encodeURIComponent(prefilledText)}` },
    { icon: <Mail className="h-6 w-6" />, name: "Email", href: `mailto:?subject=Earn $200 with GreenLine Energy&body=${encodeURIComponent(prefilledText)}` },
    { icon: <Facebook className="h-6 w-6" />, name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(prefilledText)}` }
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: 'https://facebook.com/greenlineau' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: 'https://instagram.com/greenlineau' },
  ];

  return (
    <div className="bg-dark-background text-light-text font-sans">
      <Helmet>
        <title>Earn $200 Per Referral | GreenLine Energy Affiliate Program</title>
        <meta name="description" content="Join the GreenLine Energy referral program and earn $200 for every friend you refer. Unlimited earnings, fast payouts. The perfect side income for homeowners and renters." />
        <meta property="og:title" content="Earn $200 Per Referral | GreenLine Energy Affiliate Program" />
        <meta property="og:description" content="Join the GreenLine Energy referral program and earn $200 for every friend you refer. Unlimited earnings, fast payouts." />
        <meta property="og:url" content="https://www.glenergy.com.au/referral" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/b67dc11829391a652ab3a1ddb63a6369.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <header className="py-4 px-6 flex justify-between items-center bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img src="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/0e1d92a4598a6175ce07c5b2acf31d74.jpg" alt="GreenLine Energy Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-gradient">GreenLine Energy</span>
        </div>
        <Button onClick={handleEmailButtonClick} className="btn-primary hidden sm:inline-flex">Start Earning Now</Button>
      </header>

      <section className="text-center py-20 px-4 bg-grid-pattern">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-block bg-lime-500/10 text-lime-400 text-sm font-bold px-4 py-1 rounded-full mb-4">
            UNLIMITED $200 CASH PAYOUTS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Turn Your Network into <span className="text-gradient">Net Worth</span>.
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-gray-300">
            Earn $200 cash for every friend you refer to GreenLine Energy. No limits, no fees, no hassle. Just real money for helping people save.
          </p>
          <div className="mt-8">
            <Button onClick={handleEmailButtonClick} size="lg" className="btn-primary text-lg shadow-glow w-full sm:w-auto">
              <Gift className="mr-2 h-5 w-5" />
              Claim Your $200 Bonus
            </Button>
          </div>
          <p className="text-sm mt-4 text-lime-400 animate-pulse">
            This month's referral bonuses are flying out fast – don’t miss your payout!
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Get Paid in 3 Simple Steps</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { title: "Enter Your Info", description: "Get your unique link." },
              { title: "Share Your Link", description: "Text it to friends & family." },
              { title: "Get Paid $200", description: "Earn cash for each install." }
            ].map((step, i) => (
              <React.Fragment key={i}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-800 border-2 border-lime-500 rounded-full text-2xl font-bold text-lime-400 mb-4">{i + 1}</div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
                {i < 2 && <div className="hidden md:block h-1 w-24 bg-gray-700"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center bg-dark-background p-8 rounded-2xl shadow-glow border border-lime-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Visualize Your Earnings</h2>
          <p className="text-gray-400 mb-8">Slide to see how much you could make. It adds up fast!</p>
          <div className="mb-6">
            <div className="flex justify-between text-white font-semibold text-lg mb-2">
              <span>Number of Referrals:</span>
              <span>{referrals}</span>
            </div>
            <Slider defaultValue={[3]} max={20} min={1} step={1} onValueChange={(value) => setReferrals(value[0])} />
          </div>
          <div className="bg-gray-900 rounded-lg p-6 mt-8">
            <p className="text-gray-400 text-lg">Your Potential Earnings:</p>
            <p className="text-6xl font-bold text-gradient my-2">${earnings.toLocaleString()}</p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Easiest Money You'll Ever Make</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <p className="text-light-text italic">"{t.quote}"</p>
                <p className="font-bold text-lime-400 mt-4">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-20 px-4 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Earning?</h2>
          <p className="text-gray-300 mt-2 mb-8">Click below to get your unique referral link instantly via WhatsApp.</p>
          <a href={`https://wa.me/61436603715?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="btn-primary w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Get My Link via WhatsApp
            </Button>
          </a>

          <div className="space-y-6 mt-12">
            <p className="text-lg font-semibold text-white">Or, Share Directly:</p>
            <div className="relative">
              <input type="text" readOnly value={referralLink} className="w-full bg-dark-background border-2 border-dashed border-gray-600 rounded-lg py-3 pl-4 pr-12 text-gray-400" />
              <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-400" onClick={copyToClipboard}>
                <Copy className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center gap-4">
              {shareActions.map(action => (
                <a key={action.name} href={action.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">{action.icon}</div>
                  <span className="text-xs font-medium">{action.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 bg-dark-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center justify-center gap-3">
              {badge.icon}
              <span className="font-semibold text-light-text">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <h3 className="font-semibold text-lg text-white flex items-center gap-2"><HelpCircle className="h-5 w-5 text-lime-400" />{faq.q}</h3>
                <p className="text-gray-400 mt-2 pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} GreenLine Energy Pty Ltd. All Rights Reserved.</p>
        <p className="text-xs text-gray-600 mt-2">This is an affiliate program. Payouts are subject to terms and conditions.</p>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-700 z-40">
        <Button onClick={handleEmailButtonClick} size="lg" className="btn-primary w-full text-lg">
          Start Earning $200 Now
        </Button>
      </div>
    </div>
  );
};

export default ReferralLandingPage;