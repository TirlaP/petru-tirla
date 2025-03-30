import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiMessageCircle, FiX, FiArrowUp } from 'react-icons/fi';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Also collapse the CTA when scrolling back to top
        setIsExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scroll to top button */}
          <motion.button
            className="w-10 h-10 rounded-full bg-gray-700 dark:bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </motion.button>
          
          {/* CTA Button */}
          <div className="relative">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-primary dark:text-primaryDark">Need help with a project?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      I'm available for new opportunities. Let's talk!
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Link 
                      href="/contact"
                      className="block w-full py-2 text-center bg-primary dark:bg-primaryDark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primaryDark/90 transition-colors"
                    >
                      Contact Me
                    </Link>
                    <a 
                      href="https://calendly.com/petru-tirla/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-2 text-center bg-transparent text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                isExpanded 
                  ? 'bg-gray-700 dark:bg-gray-700 text-white' 
                  : 'bg-primary dark:bg-primaryDark text-white'
              }`}
              onClick={toggleExpanded}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? <FiX size={24} /> : <FiMessageCircle size={24} />}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
