import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiZap, 
  FiTrendingUp, 
  FiCode, 
  FiDatabase, 
  FiClock, 
  FiAward, 
  FiRepeat, 
  FiCheckCircle 
} from 'react-icons/fi';

const ResultsMetricCard = ({ metric }) => {
  const { title, value, unit, comparison, project, icon } = metric;
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  // Get appropriate icon
  const getIcon = () => {
    switch(icon) {
      case 'speed': return <FiZap className="w-6 h-6" />;
      case 'chart': return <FiTrendingUp className="w-6 h-6" />;
      case 'code': return <FiCode className="w-6 h-6" />;
      case 'api': return <FiDatabase className="w-6 h-6" />;
      case 'deployment': return <FiClock className="w-6 h-6" />;
      case 'satisfaction': return <FiAward className="w-6 h-6" />;
      case 'repeat': return <FiRepeat className="w-6 h-6" />;
      case 'deadline': return <FiCheckCircle className="w-6 h-6" />;
      default: return <FiTrendingUp className="w-6 h-6" />;
    }
  };
  
  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // ~60fps
      
      // Don't animate small values (like scores out of 5)
      if (end < 10 && unit.includes('/')) {
        setDisplayValue(value);
        return;
      }
      
      // Handle very large numbers
      const range = end - start;
      const minValue = Math.max(end / 100, 1);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [value, isInView, unit]);
  
  return (
    <motion.div 
      ref={cardRef}
      className="results-metric-card bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark rounded-lg">
          {getIcon()}
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary dark:text-primaryDark">
            {displayValue}{unit}
          </div>
          {comparison && (
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">{comparison}</p>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project}
      </p>
    </motion.div>
  );
};

export default ResultsMetricCard;
