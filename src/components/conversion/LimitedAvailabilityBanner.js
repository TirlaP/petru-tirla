import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { availabilityData } from '@/src/components/data/conversion/AvailabilityData';

const LimitedAvailabilityBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Only show the banner if availability status is "Limited Availability"
  const shouldShow = availabilityData.status === "Limited Availability";
  
  // Check scroll position and screen size on client-side only
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // If not limited availability or banner was dismissed, don't show it
  if (!shouldShow || !isVisible) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {/* Only show when not scrolled down or on mobile (sticky at top) */}
      {(!isScrolled || isMobile) && (
        <motion.div
          className="fixed top-0 left-0 w-full bg-primary dark:bg-primaryDark text-white z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden h-10">
            <div className="flex items-center animate-scroll">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center mx-4 whitespace-nowrap">
                  <span className="mr-2">⚡</span>
                  <span className="font-medium">Limited availability for new projects until {availabilityData.nextAvailable}</span>
                  <span className="mx-4">•</span>
                  <Link 
                    href="/contact"
                    className="underline hover:font-bold transition-all"
                  >
                    Schedule a call now to secure your spot
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Close button */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-1 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LimitedAvailabilityBanner;
