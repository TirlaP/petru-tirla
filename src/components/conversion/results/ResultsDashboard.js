import { useState } from 'react';
import { motion } from 'framer-motion';
import ResultsMetricCard from './ResultsMetricCard';
import { resultsData } from '@/src/components/data/conversion/ResultsData';
import { ctaData } from '@/src/components/data/conversion/CTAData';
import EnhancedCTA from '../cta/EnhancedCTA';

const ResultsDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { categories } = resultsData;
  
  // Handle category filtering
  const getFilteredMetrics = () => {
    if (activeCategory === 'all') {
      // Return a mix of metrics from all categories (2 from each)
      return categories.flatMap(category => 
        category.metrics.slice(0, 2)
      );
    }
    
    const category = categories.find(c => c.id === activeCategory);
    return category ? category.metrics : [];
  };
  
  const filteredMetrics = getFilteredMetrics();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section className="results-dashboard-section py-16">
      <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-primaryDark mb-4">Results & Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Measurable outcomes from my projects that demonstrate the value I deliver to clients.
          </p>
        </motion.div>
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary dark:bg-primaryDark text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Results
          </button>
          
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary dark:bg-primaryDark text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Category Description */}
        {activeCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {categories.find(c => c.id === activeCategory)?.description}
            </p>
          </motion.div>
        )}
        
        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredMetrics.map((metric, index) => (
            <ResultsMetricCard key={metric.id} metric={metric} />
          ))}
        </motion.div>
        
        <div className="mt-16">
          <EnhancedCTA 
            variant={ctaData.variants.find(v => v.id === 'projects')} 
            primaryCTA={ctaData.primary}
            secondaryCTA={ctaData.secondary}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;
