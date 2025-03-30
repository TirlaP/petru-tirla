import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '@/src/components/data/conversion/ServicesData';
import { ctaData } from '@/src/components/data/conversion/CTAData';
import EnhancedCTA from '../cta/EnhancedCTA';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="services-section py-16 w-full">
      <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary dark:text-primaryDark mb-3 md:text-4xl">My Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base">
            I provide comprehensive development solutions tailored to your specific needs. Each service is delivered with a focus on quality, performance, and value.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 md:mt-16">
          <EnhancedCTA 
            variant={ctaData.variants.find(v => v.id === 'services')} 
            primaryCTA={ctaData.primary}
            secondaryCTA={ctaData.availability}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
