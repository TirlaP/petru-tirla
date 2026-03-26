import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioFilters } from '@/src/components/data/conversion/PortfolioFiltersData';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FilterCategory = ({ title, options, activeFilters, toggleFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="filter-category mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 px-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-left"
      >
        <span className="font-medium text-dark dark:text-light">{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-wrap gap-2">
              {options.map(option => (
                <button
                  key={option.id}
                  onClick={() => toggleFilter(title.toLowerCase(), option.id)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeFilters[title.toLowerCase()]?.includes(option.id)
                      ? 'bg-primary dark:bg-primaryDark text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilterBar = ({ activeFilters, setActiveFilters, totalProjects, filteredCount }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const toggleFilter = (category, filterId) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      
      // Initialize the category array if it doesn't exist
      if (!newFilters[category]) {
        newFilters[category] = [];
      }
      
      // Toggle the filter
      if (newFilters[category].includes(filterId)) {
        newFilters[category] = newFilters[category].filter(id => id !== filterId);
        // Remove empty arrays
        if (newFilters[category].length === 0) {
          delete newFilters[category];
        }
      } else {
        newFilters[category] = [...newFilters[category], filterId];
      }
      
      return newFilters;
    });
  };
  
  const clearAllFilters = () => {
    setActiveFilters({});
  };
  
  // Count active filters
  const totalActiveFilters = Object.values(activeFilters).flat().length;
  
  return (
    <div className="filter-bar mb-10">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center space-x-2 py-2 px-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <FiFilter className="text-primary dark:text-primaryDark" />
          <span className="font-medium text-dark dark:text-light">Filters</span>
          {totalActiveFilters > 0 && (
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary dark:bg-primaryDark text-white text-xs">
              {totalActiveFilters}
            </span>
          )}
        </button>
        
      </div>
      
      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="filter-panel bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-dark dark:text-light">Filter Projects</h3>
              
              {totalActiveFilters > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  <FiX className="mr-1" />
                  Clear All Filters
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FilterCategory
                title="Industries"
                options={portfolioFilters.industries}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
              
              <FilterCategory
                title="Technologies"
                options={portfolioFilters.technologies}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
              
              <FilterCategory
                title="ProjectTypes"
                options={portfolioFilters.projectTypes}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
              
              <FilterCategory
                title="ProblemsSolved"
                options={portfolioFilters.problemsSolved}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
              
              <FilterCategory
                title="SkillsDemonstrated"
                options={portfolioFilters.skillsDemonstrated}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Active Filters Display */}
      {totalActiveFilters > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([category, filterIds]) => 
            filterIds.map(filterId => {
              // Find the filter object to get its name
              const filterOption = portfolioFilters[category]?.find(f => f.id === filterId);
              if (!filterOption) return null;
              
              return (
                <div 
                  key={`${category}-${filterId}`}
                  className="flex items-center bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark px-3 py-1 rounded-full text-sm"
                >
                  <span className="capitalize mr-1">{filterOption.name}</span>
                  <button 
                    onClick={() => toggleFilter(category, filterId)}
                    className="ml-1 focus:outline-none"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
          
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 px-3 py-1"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
