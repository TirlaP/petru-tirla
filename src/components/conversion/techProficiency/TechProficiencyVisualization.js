import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillBar from './SkillBar';
import { techProficiencyData } from '@/src/components/data/conversion/TechProficiencyData';

const TechProficiencyVisualization = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [sortOption, setSortOption] = useState('experience'); // 'experience', 'alphabetical'
  const { categories } = techProficiencyData;
  
  const activeSkills = categories.find(c => c.id === activeCategory)?.skills || [];
  
  // Sort skills based on selected option
  const sortedSkills = [...activeSkills].sort((a, b) => {
    switch(sortOption) {
      case 'experience':
        return b.years - a.years;
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      default:
        return b.years - a.years;
    }
  });
  
  return (
    <section className="tech-proficiency-section py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-primaryDark mb-4">Technical Proficiency</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An overview of my technical skills and expertise developed through years of hands-on experience.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary dark:bg-primaryDark text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Options */}
          <div className="flex justify-end mb-6">
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark"
              >
                <option value="experience">Sort by Experience</option>
                <option value="alphabetical">Sort Alphabetically</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Skills List */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-primary dark:text-primaryDark mb-6">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h3>
                
                <div className="space-y-6">
                  {sortedSkills.map(skill => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Experience Level Legend */}
          <div className="mt-6 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center mr-6">
              <span className="block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span>Primary</span>
            </div>
            <div className="flex items-center mr-6">
              <span className="block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              <span>Actively Using</span>
            </div>
            <div className="flex items-center">
              <span className="block w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
              <span>Production Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechProficiencyVisualization;
