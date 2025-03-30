import { motion } from 'framer-motion';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '@/src/components/data/conversion/CaseStudiesData';
import { ctaData } from '@/src/components/data/conversion/CTAData';
import EnhancedCTA from '../cta/EnhancedCTA';

const CaseStudiesGrid = () => {
  return (
    <section className="case-studies-section py-16">
      <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-primaryDark mb-4">Case Studies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore detailed examples of how I've helped clients solve complex problems and achieve measurable results.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={index} 
            />
          ))}
        </div>
        
        <div className="mt-16">
          <EnhancedCTA 
            variant={ctaData.variants.find(v => v.id === 'case-studies')} 
            primaryCTA={ctaData.primary}
            secondaryCTA={ctaData.tertiary}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
