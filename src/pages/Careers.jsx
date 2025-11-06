import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Briefcase, User, Mail, Phone, ChevronDown, Star, FileText, Send, CheckCircle } from 'lucide-react';

// --- CUSTOMIZE YOUR IMAGE HERE! ---
// Just paste your image link below between the quotes to change the background!
const customImageUrl = "https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/798b9d9d1301379277f406feba48195a.png";
// ---------------------------------

// --- YOUR EMAILJS KEYS ARE NOW CONNECTED! ---
const EMAILJS_SERVICE_ID = 'service_k8ainqb';
const EMAILJS_TEMPLATE_ID = 'template_orpr1n1';
const EMAILJS_PUBLIC_KEY = 'gNWjxOp5Y9jBPtO_C';
// -----------------------------------

const Careers = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherPosition, setShowOtherPosition] = useState(false);
  const [fileName, setFileName] = useState('');

  const handlePositionChange = (e) => {
    setShowOtherPosition(e.target.value === 'Other');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    // We're using the same template, so we need to construct a similar object
    const formData = new FormData(form.current);
    const templateParams = {
        form_type: 'Careers Application',
        from_name: formData.get('fullName'),
        from_email: formData.get('email'),
        phone_number: formData.get('phone'),
        service_interest: formData.get('position') === 'Other' 
            ? `Other: ${formData.get('otherPosition')}` 
            : formData.get('position'),
        message: `
          Years of Experience: ${formData.get('experience')}
          \nQualifications: ${formData.get('qualifications')}
          \nAdditional Info: ${formData.get('message')}
          \nCV/Resume: ${fileName || 'Not provided'}
        `,
        to_email: 'contact@GLEnergy.com.au'
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((result) => {
          toast({
            title: "✅ Application Sent!",
            description: "Thank you! We've received your application and will be in touch soon.",
          });
          if (form.current) {
            form.current.reset();
          }
          setShowOtherPosition(false);
          setFileName('');
      }, (error) => {
          toast({
            title: "❌ Submission Failed",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const opportunities = [
    "Solar Installers (Subcontractors & Employees)",
    "HVAC Technicians",
    "Heat Pump Hot Water Specialists",
    "Sales Consultants (Energy Efficiency)",
    "Administrative & Support Staff",
  ];

  const previewImageUrl = `${customImageUrl}?v=20251023_0657`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white"
    >
      <Helmet>
        <title>Careers | GreenLine Energy – Join Our Team in Melbourne</title>
        <meta name="description" content="Explore career opportunities at GreenLine Energy. Apply as a subcontractor or worker in solar, heating, and cooling. Upload your CV today." />
        <meta property="og:title" content="Careers | GreenLine Energy – Join Our Team in Melbourne" />
        <meta property="og:description" content="Explore career opportunities at GreenLine Energy. Apply as a subcontractor or worker in solar, heating, and cooling. Upload your CV today." />
        <meta property="og:url" content="https://glenergy.com.au/careers" />
        <meta property="og:image" content={previewImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt" content="GreenLine Energy Careers with logo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | GreenLine Energy – Join Our Team in Melbourne" />
        <meta name="twitter:description" content="Explore career opportunities at GreenLine Energy. Apply as a subcontractor or worker in solar, heating, and cooling. Upload your CV today." />
        <meta name="twitter:image" content={previewImageUrl} />
        <meta name="twitter:image:alt" content="GreenLine Energy Careers with logo" />
        <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="pragma" content="no-cache" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${customImageUrl}')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4"
          >
            WE ARE HIRING
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl text-gray-200"
          >
            We’re seeking skilled subcontractors and workers in heating, cooling, solar installations, and energy efficiency. Apply now to shape a greener future.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Description & Opportunities */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-lime-400 mb-4 flex items-center"><Briefcase className="mr-3" /> Work With Us</h2>
            <p className="text-gray-300 mb-6">
              GreenLine Energy is Australia’s trusted renewable energy partner, helping families and businesses reduce their carbon footprint. We offer exciting opportunities for electricians, plumbers, solar installers, and other tradespeople to join our team as dedicated subcontractors or valued employees.
            </p>
            <p className="text-gray-300">
              Be part of a company that values quality, innovation, and sustainability.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-lime-400 mb-4">Current Opportunities</h3>
            <ul className="space-y-3">
              {opportunities.map((opp, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="h-5 w-5 text-lime-500 mr-3 flex-shrink-0" />
                  <span>{opp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800 rounded-lg shadow-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center text-lime-400 mb-8">Apply Now</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute top-1/2 -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                  <input type="text" name="fullName" placeholder="Full Name" required className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500" />
                </div>
                <div className="relative">
                  <Mail className="absolute top-1/2 -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                    <Phone className="absolute top-1/2 -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500" />
                </div>
                <div className="relative">
                    <Star className="absolute top-1/2 -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                    <input type="number" name="experience" placeholder="Years of Experience" required min="0" className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500" />
                </div>
              </div>

              <div className="relative">
                <Briefcase className="absolute top-1/2 -translate-y-1/2 left-3 h-5 w-5 text-gray-400" />
                <select name="position" onChange={handlePositionChange} required className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-md appearance-none focus:ring-lime-500 focus:border-lime-500">
                  <option value="">Select Position Interested In</option>
                  <option value="Solar Installer">Solar Installer</option>
                  <option value="HVAC Technician">HVAC Technician</option>
                  <option value="Hot Water Specialist">Hot Water Specialist</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              {showOtherPosition && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <input type="text" name="otherPosition" placeholder="Please specify other position" className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500" />
                </motion.div>
              )}

              <div>
                <textarea name="qualifications" placeholder="Relevant Qualifications / Certifications" rows="3" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500"></textarea>
              </div>

              <div>
                <textarea name="message" placeholder="Message / Additional Information" rows="4" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-lime-500 focus:border-lime-500"></textarea>
              </div>
              
              <div className="bg-gray-700 border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <label htmlFor="resume-upload" className="mt-4 text-sm font-medium text-lime-400 cursor-pointer hover:underline">
                      {fileName ? `Selected: ${fileName}` : 'Upload CV/Resume'}
                      <input id="resume-upload" name="resume" type="file" className="sr-only" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB) - File upload not functional with EmailJS</p>
              </div>

              <div className="text-center">
                <Button type="submit" disabled={isSubmitting} className="btn-primary w-full md:w-auto px-8 py-3 text-lg">
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Careers;