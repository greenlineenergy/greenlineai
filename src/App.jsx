import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReferralModal from '@/components/ReferralModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Chatbot from '@/components/Chatbot';
import LiveRequestNotification from '@/components/LiveRequestNotification';
import StickyCtaBar from '@/components/StickyCtaBar';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import ScrollToTop from '@/components/ScrollToTop';

const Home = lazy(() => import('@/pages/Home'));
const AirConditioning = lazy(() => import('@/pages/AirConditioning'));
const Solar = lazy(() => import('@/pages/Solar'));
const HotWater = lazy(() => import('@/pages/HotWater'));
const VeuRebates = lazy(() => import('@/pages/VeuRebates'));
const MarketingLandingPage = lazy(() => import('@/pages/MarketingLandingPage'));
const ReferralLandingPage = lazy(() => import('@/pages/ReferralLandingPage'));
const RequestReceived = lazy(() => import('@/pages/RequestReceived'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const LegalNotice = lazy(() => import('@/pages/LegalNotice'));
const VeuGuide2025 = lazy(() => import('@/pages/VeuGuide2025'));
const SolarRebates = lazy(() => import('@/pages/SolarRebates'));
const ThankYou = lazy(() => import('@/pages/ThankYou'));
const VeuInsulation = lazy(() => import('@/pages/VeuInsulation'));
const LinksPage = lazy(() => import('@/pages/Links'));
const SolarBenefits = lazy(() => import('@/pages/SolarBenefits'));
const Careers = lazy(() => import('@/pages/Careers'));


function App() {
  const location = useLocation();
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

  const noNavFooterRoutes = [
    '/offer', 
    '/request-received', 
    '/legal-notice', 
    '/referral',
    '/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025',
    '/thank-you',
    '/veu-ceiling-insulation',
    '/links',
    '/10-incredible-benefits-of-solar-power'
  ];
  const isSpecialPage = noNavFooterRoutes.includes(location.pathname);

  const topPadding = isSpecialPage ? 'pt-0' : 'pt-[12.5rem] md:pt-[180px]';
  const liveNotificationPadding = isSpecialPage ? 'pt-[3.5rem] md:pt-[50px]' : '';


  return (
    <>
      <LiveRequestNotification />
      {!isSpecialPage && <StickyCtaBar />}
      <div className={`min-h-screen flex flex-col bg-dark-background ${isSpecialPage ? liveNotificationPadding : topPadding}`}>
        {!isSpecialPage && <Navigation />}
        <ScrollToTop />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="w-full h-screen bg-dark-background" />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home onReferralOpen={() => setIsReferralModalOpen(true)} />} />
                <Route path="/air-conditioning" element={<AirConditioning />} />
                <Route path="/solar" element={<Solar />} />
                <Route path="/hot-water" element={<HotWater />} />
                <Route path="/veu-rebates" element={<VeuRebates />} />
                <Route path="/solar-rebates" element={<SolarRebates />} />
                <Route path="/offer" element={<MarketingLandingPage />} />
                <Route path="/referral" element={<ReferralLandingPage />} />
                <Route path="/request-received" element={<RequestReceived />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/legal-notice" element={<LegalNotice />} />
                <Route path="/the-ultimate-guide-to-victorian-energy-upgrades-veu-2025" element={<VeuGuide2025 />} />
                <Route path="/10-incredible-benefits-of-solar-power" element={<SolarBenefits />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/veu-ceiling-insulation" element={<VeuInsulation />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        {!isSpecialPage && <Footer />}
        <ReferralModal isOpen={isReferralModalOpen} onClose={() => setIsReferralModalOpen(false)} />
        <Chatbot />
        <FloatingWhatsApp />
        <ExitIntentPopup />
        <Toaster />
      </div>
    </>
  );
}

export default App;