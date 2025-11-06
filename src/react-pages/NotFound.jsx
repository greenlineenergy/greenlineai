import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | GreenLine Energy</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta property="og:title" content="404 - Page Not Found | GreenLine Energy" />
        <meta property="og:description" content="The page you are looking for could not be found." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c22cdeb8-ea99-4bf3-beb4-ce34d6fb856b/chatgpt-image-sep-15-2025-12_14_09-pm-1-1-aNiRe.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-lg w-full"
        >
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-lime-400" />
          </div>
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-light-text mb-8">
            Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">Go Back to Homepage</Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;