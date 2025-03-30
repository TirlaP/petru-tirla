import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Skills from '@/src/components/Skills';
import TechProficiencyVisualization from '@/src/components/conversion/techProficiency/TechProficiencyVisualization';

const TabbedSkillsSection = () => {
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' or 'tech'
  
  return (
    <div className="tabbed-skills-section w-full py-6 md:py-8">
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-0.5 md:p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors ${
              activeTab === 'skills'
                ? 'bg-white dark:bg-gray-700 text-primary dark:text-primaryDark shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750'
            }`}
          >
            Core Skills
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors ${
              activeTab === 'tech'
                ? 'bg-white dark:bg-gray-700 text-primary dark:text-primaryDark shadow-sm'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750'
            }`}
          >
            Technical Proficiency
          </button>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {activeTab === 'skills' ? (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Skills />
          </motion.div>
        ) : (
          <motion.div
            key="tech"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TechProficiencyVisualization />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabbedSkillsSection;
