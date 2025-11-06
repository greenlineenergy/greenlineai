import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Legal Notice | GreenLine Energy</title>
        <meta name="description" content="GreenLine Energy Pty Ltd Legal & Privacy Notice, including Privacy Policy, Terms & Conditions, and Disclaimer." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Legal Notice | GreenLine Energy" />
        <meta property="og:description" content="GreenLine Energy Pty Ltd Legal & Privacy Notice, including Privacy Policy, Terms & Conditions, and Disclaimer." />
        <meta property="og:url" content="https://www.glenergy.com.au/legal-notice" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-12_14_09-pm-1-1-aNiRe.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white"
      >
        <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gradient mb-4">GreenLine Energy Pty Ltd – Legal & Privacy Notice</h1>
          <p className="text-gray-400">Effective Date: 16 September 2025</p>

          <article className="mt-8 legal-content space-y-8">
            <p>Welcome to GreenLine Energy Pty Ltd (“GreenLine”, “we”, “our”, “us”). We value your trust. This page sets out our Privacy Policy, Terms & Conditions, and Disclaimer, which together govern your use of our website (<a href="http://www.glenergy.com.au" target="_blank" rel="noopener noreferrer">www.GLEnergy.com.au</a>) and our services. By using our site or engaging with our services, you agree to these terms.</p>

            <section id="privacy-policy">
              <h2>1. Privacy Policy</h2>
              <h3>Information We Collect</h3>
              <p>We may collect:</p>
              <ul>
                <li><strong>Personal details:</strong> name, phone, email, address.</li>
                <li><strong>Service details:</strong> property information, energy usage, upgrade preferences.</li>
                <li><strong>Technical information:</strong> IP address, browser type, device data, website usage (via cookies/analytics).</li>
                <li><strong>Communications:</strong> enquiries, emails, phone calls, service requests.</li>
              </ul>

              <h3>How We Use Information</h3>
              <p>We use information to:</p>
              <ul>
                <li>Provide quotes, installations, and rebate processing.</li>
                <li>Assess eligibility for government programs (e.g. Victorian Energy Upgrades).</li>
                <li>Improve our services, marketing, and website.</li>
                <li>Send updates, offers, or reminders (opt-out available).</li>
                <li>Meet legal, regulatory, and accreditation requirements.</li>
              </ul>
              
              <h3>Sharing of Information</h3>
              <p>We will never sell your information. We may share details with:</p>
              <ul>
                <li>Accredited contractors/installers.</li>
                <li>Government/regulatory bodies (e.g. ESC, SolarVic) to process rebates.</li>
                <li>Service providers (IT, marketing, CRM) under confidentiality.</li>
                <li>Legal authorities if required by law.</li>
              </ul>

              <h3>Data Security</h3>
              <p>We take reasonable steps to secure your information through encryption, restricted access, and secure systems.</p>

              <h3>Cookies & Tracking</h3>
              <p>Our site uses cookies/analytics to improve performance and advertising. You can disable cookies in your browser.</p>

              <h3>Access & Correction</h3>
              <p>You can request access to your information or ask us to correct errors by contacting us (details below).</p>
            </section>

            <section id="terms-and-conditions">
              <h2>2. Terms & Conditions</h2>
              <h3>Services</h3>
              <p>We provide:</p>
              <ul>
                <li>Heat Pump Hot Water Systems</li>
                <li>Reverse-Cycle & Ducted Air Conditioning</li>
                <li>Solar PV + Battery Installations</li>
                <li>Hydronic Heating</li>
              </ul>
              <p>Services may depend on site inspections, availability, and rebate eligibility.</p>

              <h3>Rebates & Incentives</h3>
              <ul>
                <li>Rebates depend on government eligibility criteria.</li>
                <li>Rebates are not guaranteed and subject to approval by regulatory bodies.</li>
                <li>GreenLine is not liable if you are ineligible.</li>
              </ul>
              
              <h3>Quotes & Pricing</h3>
              <ul>
                <li>Quotes valid for 30 days unless stated otherwise.</li>
                <li>Prices may vary based on site conditions or rebate changes.</li>
                <li>Additional work outside the quote will incur separate charges.</li>
              </ul>

              <h3>Payments</h3>
              <ul>
                <li>Deposits may be required before installation.</li>
                <li>Balance payable on completion unless otherwise agreed.</li>
                <li>Payment methods: bank transfer, credit/debit card, or financing.</li>
              </ul>

              <h3>Warranty & Liability</h3>
              <ul>
                <li>Products covered by manufacturer warranties.</li>
                <li>Installations follow Australian standards by accredited technicians.</li>
                <li>GreenLine not liable for manufacturer defects, delays, or losses from misuse.</li>
              </ul>

              <h3>Customer Responsibilities</h3>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate details for quotes and rebate processing.</li>
                <li>Allow safe access for inspections/works.</li>
                <li>Ensure your systems are suitable for upgrades.</li>
              </ul>

              <h3>Website Use</h3>
              <ul>
                <li>Content, branding, and images belong to GreenLine.</li>
                <li>You may not copy, reproduce, or misuse site content.</li>
              </ul>
            </section>

            <section id="disclaimer">
              <h2>3. Disclaimer</h2>
              <p>Information on this website is for general purposes only and does not constitute financial, technical, or professional advice.</p>
              <p>While we aim for accuracy, we make no guarantees that content is complete, current, or error-free.</p>
              <p>Rebates, pricing, and incentives may change without notice. Always confirm with us directly before making decisions.</p>
              <p>GreenLine accepts no liability for loss, damage, or costs incurred from reliance on website content or third-party links.</p>
              <p>External websites linked from our site are not controlled by us, and we are not responsible for their content or privacy practices.</p>
            </section>

            <section id="marketing-opt-out">
              <h2>4. Marketing & Opt-Out</h2>
              <p>We may send promotional offers and updates. You can unsubscribe anytime by clicking the link in emails or contacting us.</p>
            </section>

            <section id="contact-us">
              <h2>5. Contact Us</h2>
              <p>📧 Email: <a href="mailto:contact@glenergy.com.au">contact@glenergy.com.au</a></p>
              <p>📞 Phone: 13000 <span className="text-24-7">24-7</span> 67</p>
              <p>🌐 Website: <a href="https://www.glenergy.com.au" target="_blank" rel="noopener noreferrer">www.GLEnergy.com.au</a></p>
            </section>

            <section id="updates">
              <h2>6. Updates to This Page</h2>
              <p>We may update this Privacy Policy, Terms & Conditions, and Disclaimer to reflect business, legal, or regulatory changes. The latest version will always be posted here.</p>
            </section>
          </article>
        </div>
      </motion.div>
    </>
  );
};

export default LegalNotice;