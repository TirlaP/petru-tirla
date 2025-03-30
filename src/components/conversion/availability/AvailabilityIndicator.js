import { useState } from 'react';
import { motion } from 'framer-motion';
import { availabilityData } from '@/src/components/data/conversion/AvailabilityData';
import Link from 'next/link';

const AvailabilityIndicator = ({ compact = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { 
    status, 
    nextAvailable, 
    responseTime, 
    workingHours, 
    timeZone, 
    preferredContactMethods,
    currentCapacity,
    typicalProjectTimeline 
  } = availabilityData;
  
  const getStatusColor = () => {
    switch(status) {
      case 'Available': return 'bg-green-500';
      case 'Limited Availability': return 'bg-yellow-500';
      case 'Booked': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getStatusTextColor = () => {
    switch(status) {
      case 'Available': return 'text-green-500';
      case 'Limited Availability': return 'text-yellow-500';
      case 'Booked': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };
  
  // Compact version for header/small spaces
  if (compact) {
    return (
      <div 
        className="availability-indicator-compact flex items-center cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative">
          <span className={`status-dot ${getStatusColor()} w-3 h-3 rounded-full mr-2`}></span>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute top-6 right-0 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-3">
                <span className={`${getStatusColor()} w-3 h-3 rounded-full mr-2`}></span>
                <span className={`font-medium ${getStatusTextColor()}`}>{status}</span>
              </div>
              
              <div className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                <p>Next availability: <span className="font-medium">{nextAvailable}</span></p>
                <p>Response time: <span className="font-medium">{responseTime}</span></p>
                <p>Time zone: <span className="font-medium">{timeZone}</span></p>
              </div>
              
              <div className="mt-3 text-center">
                <Link 
                  href="/contact#availability" 
                  className="text-primary dark:text-primaryDark hover:underline text-sm font-medium"
                >
                  View full availability
                </Link>
              </div>
            </motion.div>
          )}
        </div>
        <span className={`status-text text-sm font-medium ${getStatusTextColor()} group-hover:underline`}>
          {status}
        </span>
      </div>
    );
  }
  
  // Full version for dedicated sections
  return (
    <div className="availability-indicator p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-md" id="availability">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className={`status-dot ${getStatusColor()} w-4 h-4 rounded-full mr-3`}></span>
          <h3 className="text-xl font-bold text-dark dark:text-light">
            Current Status: <span className={getStatusTextColor()}>{status}</span>
          </h3>
        </div>
        
        <div className="availability-capacity">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">Current workload:</span>
            <span className="text-sm font-medium">{currentCapacity}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${currentCapacity > 80 ? 'bg-red-500' : currentCapacity > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
              style={{ width: `${currentCapacity}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="availability-details space-y-4">
          <div>
            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">Availability</h4>
            <p className="text-dark dark:text-light">Next available: <strong>{nextAvailable}</strong></p>
            <p className="text-dark dark:text-light">Typical project timeline: <strong>{typicalProjectTimeline}</strong></p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">Working Hours</h4>
            <p className="text-dark dark:text-light">{workingHours} <span className="text-gray-500 dark:text-gray-400">({timeZone})</span></p>
          </div>
        </div>
        
        <div className="communication-details space-y-4">
          <div>
            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">Communication</h4>
            <p className="text-dark dark:text-light">Response time: <strong>{responseTime}</strong></p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">Preferred Contact Methods</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {preferredContactMethods.map((method, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {status !== 'Available' && (
        <div className="mt-6 text-center">
          <a
            href="https://calendly.com/petru-tirla/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary dark:bg-primaryDark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primaryDark/90 transition-colors"
          >
            Schedule a Call Anyway
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Limited availability means I can still take on small projects or schedule work for the future.
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailabilityIndicator;
