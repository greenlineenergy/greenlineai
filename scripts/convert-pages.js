import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reactPagesDir = path.join(__dirname, '../src/react-pages');
const astroPagesDir = path.join(__dirname, '../src/pages');

// Route mapping from App.jsx
const routes = [
  { path: 'air-conditioning', component: 'AirConditioning', noNavFooter: false },
  { path: 'solar', component: 'Solar', noNavFooter: false },
  { path: 'hot-water', component: 'HotWater', noNavFooter: false },
  { path: 'veu-rebates', component: 'VeuRebates', noNavFooter: false },
  { path: 'solar-rebates', component: 'SolarRebates', noNavFooter: false },
  { path: 'offer', component: 'MarketingLandingPage', noNavFooter: true },
  { path: 'referral', component: 'ReferralLandingPage', noNavFooter: true },
  { path: 'request-received', component: 'RequestReceived', noNavFooter: true },
  { path: 'privacy-policy', component: 'PrivacyPolicy', noNavFooter: false },
  { path: 'terms-of-service', component: 'TermsOfService', noNavFooter: false },
  { path: 'legal-notice', component: 'LegalNotice', noNavFooter: true },
  { path: 'the-ultimate-guide-to-victorian-energy-upgrades-veu-2025', component: 'VeuGuide2025', noNavFooter: true },
  { path: '10-incredible-benefits-of-solar-power', component: 'SolarBenefits', noNavFooter: true },
  { path: 'thank-you', component: 'ThankYou', noNavFooter: true },
  { path: 'veu-ceiling-insulation', component: 'VeuInsulation', noNavFooter: true },
  { path: 'links', component: 'Links', noNavFooter: true },
  { path: 'careers', component: 'Careers', noNavFooter: false },
];

// Extract metadata from React component
function extractMetadata(content) {
  const metadata = {
    title: 'GreenLine Energy',
    description: 'Melbourne\'s official VEU-accredited provider',
    canonicalUrl: '',
    ogImage: 'https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/ba73c24d322584d01517759472608fd1.png',
    ogImageAlt: 'GreenLine Energy',
  };

  // Extract title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  if (titleMatch) {
    metadata.title = titleMatch[1].replace(/["']/g, '').trim();
  }

  // Extract description
  const descMatch = content.match(/name="description"\s+content=["'](.*?)["']/);
  if (descMatch) {
    metadata.description = descMatch[1].replace(/["']/g, '').trim();
  }

  // Extract canonical URL
  const canonicalMatch = content.match(/rel="canonical"\s+href=["'](.*?)["']/);
  if (canonicalMatch) {
    metadata.canonicalUrl = canonicalMatch[1];
  }

  // Extract OG image
  const ogImageMatch = content.match(/property="og:image"\s+content=["'](.*?)["']/);
  if (ogImageMatch) {
    metadata.ogImage = ogImageMatch[1];
  }

  // Extract OG image alt
  const ogImageAltMatch = content.match(/property="og:image:alt"\s+content=["'](.*?)["']/);
  if (ogImageAltMatch) {
    metadata.ogImageAlt = ogImageAltMatch[1];
  }

  return metadata;
}

// Create Astro page wrapper
function createAstroWrapper(route, metadata) {
  const componentName = route.component;

  return `---
import BaseLayout from '@/layouts/BaseLayout.astro';
import ${componentName} from '@/react-pages/${componentName}';

const metadata = ${JSON.stringify(metadata, null, 2)};
---

<BaseLayout
  title={metadata.title}
  description={metadata.description}
  canonicalUrl={metadata.canonicalUrl}
  ogImage={metadata.ogImage}
  ogImageAlt={metadata.ogImageAlt}
  noNavFooter={${route.noNavFooter}}
>
  <${componentName} client:load />

  <!-- Noscript fallback for critical CTAs -->
  <noscript>
    <div style="padding: 40px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); margin: 40px 20px; border-radius: 12px; text-align: center;">
      <h2 style="color: white; font-size: 32px; margin-bottom: 20px;">Contact GreenLine Energy</h2>
      <p style="color: white; font-size: 18px; margin-bottom: 30px;">
        For the best experience, please enable JavaScript. Or contact us directly:
      </p>
      <a
        href="tel:1300024767"
        style="display: inline-block; background-color: white; color: #059669; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 18px; margin: 10px;"
      >
        Call 13000 24-7 67
      </a>
      <br>
      <a
        href="mailto:info@greenlineenergy.com.au"
        style="display: inline-block; background-color: white; color: #059669; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 18px; margin: 10px;"
      >
        Email Us
      </a>
    </div>
  </noscript>
</BaseLayout>
`;
}

// Process each route
for (const route of routes) {
  const reactFile = path.join(reactPagesDir, `${route.component}.jsx`);

  if (!fs.existsSync(reactFile)) {
    console.warn(`Warning: ${reactFile} not found, skipping...`);
    continue;
  }

  const content = fs.readFileSync(reactFile, 'utf-8');
  const metadata = extractMetadata(content);
  const astroContent = createAstroWrapper(route, metadata);

  const astroFile = path.join(astroPagesDir, `${route.path}.astro`);
  fs.writeFileSync(astroFile, astroContent);

  console.log(`✓ Created ${route.path}.astro`);
}

// Create 404 page
const notFoundContent = `---
import BaseLayout from '@/layouts/BaseLayout.astro';
import NotFound from '@/react-pages/NotFound';
---

<BaseLayout
  title="Page Not Found | GreenLine Energy"
  description="The page you're looking for could not be found."
>
  <NotFound client:load />
</BaseLayout>
`;

fs.writeFileSync(path.join(astroPagesDir, '404.astro'), notFoundContent);
console.log('✓ Created 404.astro');

console.log('\n✨ All pages converted successfully!');
